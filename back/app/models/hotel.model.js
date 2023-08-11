const mongoose = require("mongoose");
const { Schema } = mongoose;
const hotelSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    city: { type: String, required: true },
    address: {
      type: String,
      required: true,
    },
   // image: [ {public_id: {type: String,required: true,  }, url: {   type: String,   required: true },
    desc: { type: String, reequired: true },

    price: {
      type: Number,
      required: true,
    },
    priceChM : {
      type : Number,
      required : true
    },
    priceChJ : {                        
      type: Number,
      required : true
    },
    priceDemi : {
      type: Number,
      required : true
    },

    priceAll : {
       type : Number,
       required : true
    },
    priceChtwo:{
      type : Number,
      required : true
    },
    priceChthree:{
      type : Number,
      required : true
    },
    priceChsingle:{
      type : Number,
      required : true
    },

    reviews: [  
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
    ],
    
    featured: {
      type: String,
      default: false,
    },
    images: [
      {
        public_id: {
          type: String,
          required: false,
        },
        url: {
          type: String,
          required: false
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hotel", hotelSchema);
