const Formulairedest = require("../models/formulairedest.model");
const Formulaireevent = require("../models/formulaireevent.model")





const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

const cloudinary = require("cloudinary");

exports.getStatCount = catchAsyncErrors(async (req, res, next) => {
    const formulaireeventCount = Formulaireevent.countDocuments();
    const formulairedestCount = Formulairedest.countDocuments();
   
  
    const [formulairedest,formulaireevent] = await Promise.all([formulaireeventCount,formulairedestCount]);
  
    res.status(200).json({
      
      formulairedest,formulaireevent
    });
  });
  