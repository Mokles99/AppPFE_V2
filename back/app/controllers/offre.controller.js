const Offre = require("../models/offre.model");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

const cloudinary = require("cloudinary");


// Create new offre   =>   /api/v1/admin/offre/new
exports.newOffre = catchAsyncErrors(async (req, res, next) => {
  let images = [];
  if (typeof req.body.images === "string") {
    console.log("!!!")
    images.push(req.body.images);
  } else {
    
    images = req.body.images;
  }

  let imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "offres",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }
  
  req.body.images = imagesLinks;
  

  const offre = await Offre.create(req.body);

  res.status(201).json({
    success: true,
    offre,
  });
});

exports.getAllOffres = catchAsyncErrors(async (req, res, next) => {
  const offres = await Offre.find();

  res.status(200).json({
    success: true,
    offres,
  });
});

// Get single offre details   =>   /api/v1/offre/:id
exports.getSingleOffre = catchAsyncErrors(async (req, res, next) => {
  const offre = await Offre.findById(req.params.id);

  if (!offre) {
    return next(new ErrorHandler("Offre not found", 404));
  }

  res.status(200).json({
    success: true,
    offre,
  });
});

// Update Offre   =>   /api/v1/admin/offre/:id
exports.updateOffre = catchAsyncErrors(async (req, res, next) => {
  let offre = await Offre.findById(req.params.id);

  if (!offre) {
    return next(new ErrorHandler("Offre not found", 404));
  }

  let images = [];
  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Deleting images associated with the offre
    for (let i = 0; i < offre.images.length; i++) {
      const result = await cloudinary.v2.uploader.destroy(
        offre.images[i].public_id
      );
    }

    let imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "offres",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
  }

  offre = await Offre.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    offre,
  });
});

// Delete Offre   =>   /api/v1/admin/offre/:id
exports.deleteOffre = catchAsyncErrors(async (req, res, next) => {
  const offre = await Offre.findById(req.params.id);

  if (!offre) {
    return next(new ErrorHandler("Offre not found", 404));
  }

  // Deleting images associated with the offre
  for (let i = 0; i < offre.images.length; i++) {
    const result = await cloudinary.v2.uploader.destroy(
      offre.images[i].public_id
    );
  }

  await offre.remove();

  res.status(200).json({
    success: true,
    message: "Offre is deleted.",
  });
});
