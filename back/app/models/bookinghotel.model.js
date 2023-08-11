const mongoose = require('mongoose')

const BookingHotelSchema = new mongoose.Schema ({

    username:{
        type:String,
        required : true
    },
    night:{
        type:String,
        required:false
    },
    status:{
        type:String,
        required:false,
    },
    totalpay:{
        type:String,
        required:false
    },
    hebrgtype:{
        type:String,
        required:false
    },
    chambretype:{
        type:String,
        required:false
    },
    sizetype:{
        type:String,
        required:false
    },
    priceHebr:{
        type:String,
        required:false
    },
    priceChambre:{
        type:String,
        required:false
    },
    priceSize:{
        type:String,
        required:false
    },
    userId:{
        type:String,
    },
    hotelTitle:{
        type:String,
        required:true,
    },
    email:{
        type:String,
    },
    phone:{
        type:Number,
        required:true,
    },
    bookAt:{
        type:Date,
        // required:true,
    },
    fullName:{
        type:String,
        required:true,
    }
},{timestamps:true})



module.exports=mongoose.model('bookinghotel',BookingHotelSchema)