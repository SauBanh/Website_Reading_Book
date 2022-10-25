const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    email: {type: String, default: null, unique: true},
    username: {type: String, default: null},
    hashpassword: {type: String, default: null},
    ggid: {type: String, default: null},
    fbid: {type: String, default: null}
},  {
    timestamps: true,
});

module.exports = mongoose.model('user', user);