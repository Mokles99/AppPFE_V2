const mongoose = require("mongoose");
const { Schema } = mongoose;
const galleryeventSchema = new Schema({

  title: {
    type: String,
    required: [true, "please enter galleryevent name"],
    trim: true,
    maxlength: [100, "name never pass 100 characters"],
  },
  createtAt: {
    type: Date,
   
    default: Date.now,
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
module.exports = mongoose.model("Galleryevent", galleryeventSchema);
