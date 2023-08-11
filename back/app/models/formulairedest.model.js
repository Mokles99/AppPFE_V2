const mongoose = require('mongoose')

const FormulairedestSchema = new mongoose.Schema ({

    name:{
        type:String,
        required : true
    },
    email:{
        type:String,
        required:true
    },
    message :
    { type:String,
    required:true},
    number:{
        type:Number,
        required:true
    },

    title:
    {
        type:String,
        required:true,
    },
    price : {
        type:String,
        required:false,
    }
    // imagePath: { type:String,required: true },
},{timestamps:true})



module.exports=mongoose.model('formulairedest',FormulairedestSchema)