const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/smarti"
);

const questionsSeed = [
    {
        question: "You're 3rd place right now in a race. What place are you in when you pass the person in 2nd place?",
        answers: ["1st", "2nd", "3rd", "last"],
        correct: "2nd",
        hint: "You swap places"
    },
    {
        question: "What's the meaning of life?",
        answers: ["42", "14", "Death", "nothing"],
        correct: "42",
        hint: "look up Hitchhikers guide to the galaxy"
    },
    {
        question: "finish this sentence, Hello, ______",
        answers: ["is it me your looking for?", "from the outside.", "it's me.", "it'sa ME!"],
        correct: "is it me your looking for?",
        hint: "Lionel Richie, Can't Slow Down"
    },
    {
        question: "How many fingers do you have?",
        answers: ["7", "8", "9", "10"],
        correct: "8",
        hint: "Each finger is called a (something) finger"
    },
    {
        question: "there are 8 rabbits in a bush, you catch one. How many rabbits are in the bush?",
        answers: ["18", "2", "7", "0"],
        correct: "0",
        hint: "Rabbits get scared"
    }
];

db.Question.remove({}).then(()=> db.Question.collection.insertMany(questionsSeed))
.then(data => {
    console.log(data.result.n+ "records inserted!");
    process.exit(0)
})
.catch(err => {
    console.error(err);
    process.exit(1);
})