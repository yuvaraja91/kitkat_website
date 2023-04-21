const mongoose = require('mongoose');

const ReactFormDataSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    email:{
        type:String,
        required:true
    }
});

const User = mongoose.model('User', ReactFormDataSchema);
module.exports = User;