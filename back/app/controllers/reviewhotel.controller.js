const ReviewHotelModel =require ("../models/reviewhotel.model")
const HotelModel = require("../models/hotel.model")
const catchAsyncErrors = require("../middlewares/catchAsyncErrors")

exports.createReview = async(req,res) => {

    const idhotel = req.params.idhotel
    const newReview=new ReviewHotelModel ({ ... req.body})
  
    try{
        const savedReview = await newReview.save()
        await HotelModel.findByIdAndUpdate(idhotel,{
            $push:{reviews:savedReview._id}
        })

        res.status(200).json({ message: " Review submitted ",data:savedReview})
  
  
    } catch(error){
  

        res.status(500).json({ message: " false review",data:savedReview})
      
  
    }
  }

  exports.getAllReviewsByHotelId = catchAsyncErrors(async (req, res, next) => {
      console.log('-------------------------',req.params.id)
    
    const query = {idhotel : req.params.id}
    const reviewsHotel = await ReviewHotelModel.find(query);
  
    res.status(200).json({
      success: true,
      reviewsHotel,
    });
  });