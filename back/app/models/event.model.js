const mongoose = require("mongoose");
const { Schema } = mongoose;
const eventSchema = new Schema({

  title: {
    type: String,
    required: [true, "please enter event name"],
    trim: true,
    maxlength: [100, "name never pass 100 characters"],
  },
  createtAt: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now,
  },
 
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  places :{
    type:Number,
    required:true,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true
      },
    },
  ],
 
  
});
module.exports = mongoose.model("Event", eventSchema);
