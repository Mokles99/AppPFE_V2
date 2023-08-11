const Destination = require("../models/destination.model");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

const cloudinary = require("cloudinary");

// Create new destination   =>   /api/v1/admin/destination/new
exports.newDestination = catchAsyncErrors(async (req, res, next) => {
  let images = [];
  if (typeof req.body.images === "string") {
    console.log("!!!");
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  let imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "destinations",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;

  const destination = await Destination.create(req.body);

  res.status(201).json({
    success: true,
    destination,
  });
});

exports.getAllDestinations = catchAsyncErrors(async (req, res, next) => {
    const title = req.query.title;
    const location = req.query.location;
    const price = req.query.price;

    let destinations;

    try {
      if ( title || location || price) {
         destinations = await Destination.find({
          title: { $regex: new RegExp(title, 'i') },
          location: { $regex: new RegExp(location, 'i') },
           price: { $regex: new RegExp(price, 'i') },
        });

      } else {
         destinations = await Destination.find();
      }
    } catch (e) {
      console.log("error" . e)
    }

    res.status(200).json({
      success: true,
      destinations,
    });
  });

  // Get single destination details   =>   /api/v1/destination/:id
  exports.getSingleDestination = catchAsyncErrors(async (req, res, next) => {
    const destination = await Destination.findById(req.params.id);

    if (!destination) {
      return next(new ErrorHandler("Destination not found", 404));
    }

    res.status(200).json({
      success: true,
      destination,
    });
});

// Update Destination   =>   /api/v1/admin/destination/:id
exports.updateDestination = catchAsyncErrors(async (req, res, next) => {
  let destination = await Destination.findById(req.params.id);

  if (!destination) {
    return next(new ErrorHandler("Destination not found", 404));
  }

  let images = [];
  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Deleting images associated with the destination
    for (let i = 0; i < destination.images.length; i++) {
      const result = await cloudinary.v2.uploader.destroy(
        destination.images[i].public_id
      );
    }

    let imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "destinations",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
  }

  destination = await Destination.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    destination,
  });
});

// Delete Destination   =>   /api/v1/admin/destination/:id
exports.deleteDestination = catchAsyncErrors(async (req, res, next) => {
  const destination = await Destination.findById(req.params.id);

  if (!destination) {
    return next(new ErrorHandler("Destination not found", 404));
  }

  // Deleting images associated with the destination
  for (let i = 0; i < destination.images.length; i++) {
    const result = await cloudinary.v2.uploader.destroy(
      destination.images[i].public_id
    );
  }

  await destination.remove();

  res.status(200).json({
    success: true,
    message: "Destination is deleted.",
  });
});

exports.searchDestination = async (req, res) => {
  try {
    const title = req.query.title;
    const location = req.query.location;
    const price = req.query.price;
    console.log({ title, price, location });

    const destinations = await Destination.find({
      title: { $regex: new RegExp(title, "i") },
      location: { $regex: new RegExp(location, "i") },
      price: { $regex: new RegExp(price, "i") },
    });

    res.json(destinations);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
