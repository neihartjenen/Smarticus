var mongoose = require("mongoose");

var Schema = mongoose.Schema 
var questionSchema = new Schema ({
    questions: {type: String},
    answer: {type: String},
    possibleChoice: {type: Array}
})

var Question = mongoose.model("Question", questionSchema);

module.exports = Question