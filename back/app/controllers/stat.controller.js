const Event = require("../models/event.model");
const Destination = require("../models/destination.model")
const Hotel = require("../models/hotel.model")
const Bloghome = require ("../models/bloghome.model")
const Offre = require ("../models/offre.model")
const Users = require ("../models/user.model")




const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

const cloudinary = require("cloudinary");

exports.getStatCount = catchAsyncErrors(async (req, res, next) => {
    const eventCount = Event.countDocuments();
    const destinationCount = Destination.countDocuments();
    const hotelCount = Hotel.countDocuments();
    const bloghomeCount = Bloghome.countDocuments();
    const offreCount = Offre.countDocuments();
    const userCount = Users.countDocuments();
    
  
    const [events, destinations ,hotels,blogs,offres ,users] = await Promise.all([eventCount, destinationCount,
    hotelCount,bloghomeCount,offreCount,userCount]);
  
    res.status(200).json({
      events,
      destinations,
      hotels,
      blogs,
      offres,
      users,

    });
  });
  