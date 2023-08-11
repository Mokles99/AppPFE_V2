const mongoose = require('mongoose')

const ReviewHotelSchema = new mongoose.Schema ({

    username:{
        type:String,
        required : true
    },
    reviewText:
    { type:String,
    required:true}
    ,idhotel:{
        type:String,
        required:true
    },
},{timestamps:true})


module.exports=mongoose.model('reviewhotel',ReviewHotelSchema)