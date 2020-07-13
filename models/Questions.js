var mongoose = require("mongoose");

var Schema = mongoose.Schema 
var questionSchema = new Schema ({
    question: {type: String},
    answers: {type: Array},
    correct: {type: String},
    hint: {type: String}
})

var Question = mongoose.model("Question", questionSchema);

module.exports = Question