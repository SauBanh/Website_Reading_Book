const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const book = new Schema({
    email: {type: String, default: null},
    author: {type: String, default: null},
    bookname: {type: String, default: null}, 
    pic: {type:String, default: null}, 
    slug: {type:String, default: null}, 
    categories: {type: Array, default: []}
},  {
    timestamps: true,
});

module.exports = mongoose.model('book', book);