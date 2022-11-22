const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    email: {type: String, default: null, unique: true},
    username: {type: String, default: null},
    hashpassword: {type: String, default: null},
    ggid: {type: String, default: null},
    fbid: {type: String, default: null},
    vipexpire: {type: Date, default: Date.now()},
    active: {type: Boolean, default: true},
    //change to default user role on default
    uploader: {type: Boolean, default: false},
    admin: {type: Boolean, default: false}
},  {
    timestamps: true,
});

module.exports = mongoose.model('user', user);