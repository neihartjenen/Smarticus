const mongoose = require('mongoose');
const { type } = require('os');
const Schema = mongoose.Schema,
bcrypt = require("bcrypt"),
SALT_WORK_FACTOR = 10;


const userSchema = new Schema({
    username: {type: String, required: true, index: {unique: true}},
    password: {type: String, required: true},
    tempScore: {type: Number},
    Score: []
    
})

const User = mongoose.model('User', userSchema);
module.exports = User