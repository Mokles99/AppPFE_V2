const mongoose = require('mongoose')

const FormulaireeventSchema = new mongoose.Schema ({

    name:{
        type:String,
        required : true
    },
    email:{
        type:String,
        required:true
    },
    number :
    { type:String,
    required:true},

    title:
    {
        type:String,
        required:true,
    },
    price : {
        type:String,
        required:true,
    }
    // imagePath: { type:String,required: true },
},{timestamps:true})



module.exports=mongoose.model('formulaireevent',FormulaireeventSchema)