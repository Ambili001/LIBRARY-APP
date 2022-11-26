const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    place:{
        type:String,
        default:Date.now()
    },//Date of adding
    phone:{
        type:String,
        required:true
    }

})


let UserData = mongoose.model('users', UserSchema)

module.exports = UserData