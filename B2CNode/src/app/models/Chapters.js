const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chapter = new Schema({
    chapname: {type: String, default: null}, 
    bookid: {default: null}, 
    chaplink: {default: null}, 
},  {
    timestamps: true,
});

module.exports = mongoose.model('chapter', chapter);