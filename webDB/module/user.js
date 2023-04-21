const mongoose =require("mongoose");

const dataschema = mongoose.Schema({


  name:{
     type:String,
     required:true,
  },
   
  email:{
    type:String,
    required:true,
  },


  phone:{
    type:Number,
    required:false,
  }
})
module.exports =  mongoose.model('user',dataschema)
