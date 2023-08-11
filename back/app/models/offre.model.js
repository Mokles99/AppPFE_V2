const mongoose = require("mongoose");
const { Schema } = mongoose;
const offreSchema = new Schema({

  title: {
    type: String,
    required: [true, "please enter offre name"],
    trim: true,
    maxlength: [100, "name never pass 100 characters"],
  },
  createtAt: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now,
  },
  pourcentage: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
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
module.exports = mongoose.model("Offre", offreSchema);
