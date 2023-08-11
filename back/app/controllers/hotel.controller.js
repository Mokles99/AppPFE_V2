const Hotel = require("../models/hotel.model");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

const cloudinary = require("cloudinary");


// Create new hotel   =>   /api/v1/admin/hotel/new
exports.newHotel = catchAsyncErrors(async (req, res, next) => {
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
      folder: "hotels",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }
  
  req.body.images = imagesLinks;
  

  const hotel = await Hotel.create(req.body);

  res.status(201).json({
    success: true,
    hotel,
  });
});

exports.getAllHotels = catchAsyncErrors(async (req, res, next) => {
  const hotels = await Hotel.find();

  res.status(200).json({
    success: true,
    hotels,
  });
});

// Get single hotel details   =>   /api/v1/hotel/:id
exports.getSingleHotel = catchAsyncErrors(async (req, res, next) => {
  const hotel = await Hotel.findById(req.params.id);

  if (!hotel) {
    return next(new ErrorHandler("Hotel not found", 404));
  }

  res.status(200).json({
    success: true,
    hotel,
  });
});

// Update Hotel   =>   /api/v1/admin/hotel/:id
exports.updateHotel = catchAsyncErrors(async (req, res, next) => {
  let hotel = await Hotel.findById(req.params.id);

  if (!hotel) {
    return next(new ErrorHandler("Hotel not found", 404));
  }

  let images = [];
  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Deleting images associated with the hotel
    for (let i = 0; i < hotel.images.length; i++) {
      const result = await cloudinary.v2.uploader.destroy(
        hotel.images[i].public_id
      );
    }

    let imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "hotels",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
  }

  hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    hotel,
  });
});

// Delete Hotel   =>   /api/v1/admin/hotel/:id
exports.deleteHotel = catchAsyncErrors(async (req, res, next) => {
  const hotel = await Hotel.findById(req.params.id);

  if (!hotel) {
    return next(new ErrorHandler("Hotel not found", 404));
  }

  // Deleting images associated with the hotel
  for (let i = 0; i < hotel.images.length; i++) {
    const result = await cloudinary.v2.uploader.destroy(
      hotel.images[i].public_id
    );
  }

  await hotel.remove();

  res.status(200).json({
    success: true,
    message: "Hotel is deleted.",
  });
});


exports.searchByTitleAndCity=async(req,res)=>{
  
  try{
    const title = req.query.title;
    const city = req.query.city;

    const hotels = await Hotel.find({
      title: { $regex: new RegExp(title, 'i') },
      city: { $regex: new RegExp(city, 'i') },
    });

    res.json(hotels);

  } catch(error){

    console.error(error.message);
    res.status(500).send('Server Error');

  }
}


