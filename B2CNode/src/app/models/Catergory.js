const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const catergory = new Schema({
    email: {type: String, default: null},
});

module.exports = mongoose.model('catergory', catergory);