const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chapter = new Schema({
    chapname: {type: String, default: null}, 
    bookid: {type: String, default: null}, 
    chaplink: [{type: [String], default: null}], 
},  {
    timestamps: true,
});

module.exports = mongoose.model('chapter', chapter);