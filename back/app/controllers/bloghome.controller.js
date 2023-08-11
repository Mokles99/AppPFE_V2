const Bloghome = require("../models/bloghome.model");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

const cloudinary = require("cloudinary");


// Create new bloghome   =>   /api/v1/admin/bloghome/new
exports.newBloghome = catchAsyncErrors(async (req, res, next) => {
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
      folder: "bloghomes",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }
  
  req.body.images = imagesLinks;
  

  const bloghome = await Bloghome.create(req.body);

  res.status(201).json({
    success: true,
    bloghome,
  });
});

exports.getAllBloghomes = catchAsyncErrors(async (req, res, next) => {
  const bloghomes = await Bloghome.find();

  res.status(200).json({
    success: true,
    bloghomes,
  });
});

// Get single bloghome details   =>   /api/v1/bloghome/:id
exports.getSingleBloghome = catchAsyncErrors(async (req, res, next) => {
  const bloghome = await Bloghome.findById(req.params.id);

  if (!bloghome) {
    return next(new ErrorHandler("Bloghome not found", 404));
  }

  res.status(200).json({
    success: true,
    bloghome,
  });
});

// Update Bloghome   =>   /api/v1/admin/bloghome/:id
exports.updateBloghome = catchAsyncErrors(async (req, res, next) => {
  let bloghome = await Bloghome.findById(req.params.id);

  if (!bloghome) {
    return next(new ErrorHandler("Bloghome not found", 404));
  }

  let images = [];
  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Deleting images associated with the bloghome
    for (let i = 0; i < bloghome.images.length; i++) {
      const result = await cloudinary.v2.uploader.destroy(
        bloghome.images[i].public_id
      );
    }

    let imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "bloghomes",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
  }

  bloghome = await Bloghome.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    bloghome,
  });
});

// Delete Bloghome   =>   /api/v1/admin/bloghome/:id
exports.deleteBloghome = catchAsyncErrors(async (req, res, next) => {
  const bloghome = await Bloghome.findById(req.params.id);

  if (!bloghome) {
    return next(new ErrorHandler("Bloghome not found", 404));
  }

  // Deleting images associated with the bloghome
  for (let i = 0; i < bloghome.images.length; i++) {
    const result = await cloudinary.v2.uploader.destroy(
      bloghome.images[i].public_id
    );
  }

  await bloghome.remove();

  res.status(200).json({
    success: true,
    message: "Bloghome is deleted.",
  });
});
