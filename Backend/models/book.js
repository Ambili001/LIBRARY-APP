const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publisher:{
        type:String,
        required:true
    },
    pages:{
        type:String,
        required:true
    }

})


let BookData = mongoose.model('books', BookSchema)

module.exports = BookData