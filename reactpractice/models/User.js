const mongoose = require('mongoose');
const { type } = require('os');
const Schema = mongoose.Schema;


const User = new Schema({
    username: {type: String},
    password: {type: String},
    tempScore: {type: String},
    Score: []
    
})


module.exports = mongoose.model('User', User);