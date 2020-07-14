const db = require("../models");
const { model } = require("../models/User");

model.exports = {
    findAll: function(req, res){
        db.Question.find(req.query).sort({_id: -1}).then(dbModel => res.json(dbModel).catch(err => res.status(422).json(err)));

    },

    create: function(req, res ){
        db.User.create(req.body).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err));
    }
}