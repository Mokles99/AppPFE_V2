const Test = require("../models/test.model");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

const cloudinary = require("cloudinary");


// Create new test   =>   /api/v1/admin/test/new
exports.newTest = catchAsyncErrors(async (req, res, next) => {
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
      folder: "tests",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }
  
  req.body.images = imagesLinks;
  

  const test = await Test.create(req.body);

  res.status(201).json({
    success: true,
    test,
  });
});

exports.getAllTests = catchAsyncErrors(async (req, res, next) => {
  const tests = await Test.find();

  res.status(200).json({
    success: true,
    tests,
  });
});

// Get single test details   =>   /api/v1/test/:id
exports.getSingleTest = catchAsyncErrors(async (req, res, next) => {
  const test = await Test.findById(req.params.id);

  if (!test) {
    return next(new ErrorHandler("Test not found", 404));
  }

  res.status(200).json({
    success: true,
    test,
  });
});

// Update Test   =>   /api/v1/admin/test/:id
exports.updateTest = catchAsyncErrors(async (req, res, next) => {
  let test = await Test.findById(req.params.id);

  if (!test) {
    return next(new ErrorHandler("Test not found", 404));
  }

  let images = [];
  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Deleting images associated with the test
    for (let i = 0; i < test.images.length; i++) {
      const result = await cloudinary.v2.uploader.destroy(
        test.images[i].public_id
      );
    }

    let imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "tests",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
  }

  test = await Test.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    test,
  });
});

// Delete Test   =>   /api/v1/admin/test/:id
exports.deleteTest = catchAsyncErrors(async (req, res, next) => {
  const test = await Test.findById(req.params.id);

  if (!test) {
    return next(new ErrorHandler("Test not found", 404));
  }

  // Deleting images associated with the test
  for (let i = 0; i < test.images.length; i++) {
    const result = await cloudinary.v2.uploader.destroy(
      test.images[i].public_id
    );
  }

  await test.remove();

  res.status(200).json({
    success: true,
    message: "Test is deleted.",
  });
});
