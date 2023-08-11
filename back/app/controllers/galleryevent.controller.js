const Galleryevent = require("../models/galleryevent.model");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

const cloudinary = require("cloudinary");


// Create new galleryevent   =>   /api/v1/admin/galleryevent/new
exports.newGalleryevent = catchAsyncErrors(async (req, res, next) => {
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
      folder: "galleryevents",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }
  
  req.body.images = imagesLinks;
  

  const galleryevent = await Galleryevent.create(req.body);

  res.status(201).json({
    success: true,
    galleryevent,
  });
});

exports.getAllGalleryevents = catchAsyncErrors(async (req, res, next) => {
  const galleryevents = await Galleryevent.find();

  res.status(200).json({
    success: true,
    galleryevents,
  });
});

// Get single galleryevent details   =>   /api/v1/galleryevent/:id
exports.getSingleGalleryevent = catchAsyncErrors(async (req, res, next) => {
  const galleryevent = await Galleryevent.findById(req.params.id);

  if (!galleryevent) {
    return next(new ErrorHandler("Galleryevent not found", 404));
  }

  res.status(200).json({
    success: true,
    galleryevent,
  });
});

// Update Galleryevent   =>   /api/v1/admin/galleryevent/:id
exports.updateGalleryevent = catchAsyncErrors(async (req, res, next) => {
  let galleryevent = await Galleryevent.findById(req.params.id);

  if (!galleryevent) {
    return next(new ErrorHandler("Galleryevent not found", 404));
  }

  let images = [];
  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Deleting images associated with the galleryevent
    for (let i = 0; i < galleryevent.images.length; i++) {
      const result = await cloudinary.v2.uploader.destroy(
        galleryevent.images[i].public_id
      );
    }

    let imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "galleryevents",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
  }

  galleryevent = await Galleryevent.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    galleryevent,
  });
});

// Delete Galleryevent   =>   /api/v1/admin/galleryevent/:id
exports.deleteGalleryevent = catchAsyncErrors(async (req, res, next) => {
  const galleryevent = await Galleryevent.findById(req.params.id);

  if (!galleryevent) {
    return next(new ErrorHandler("Galleryevent not found", 404));
  }

  // Deleting images associated with the galleryevent
  for (let i = 0; i < galleryevent.images.length; i++) {
    const result = await cloudinary.v2.uploader.destroy(
      galleryevent.images[i].public_id
    );
  }

  await galleryevent.remove();

  res.status(200).json({
    success: true,
    message: "Galleryevent is deleted.",
  });
});
