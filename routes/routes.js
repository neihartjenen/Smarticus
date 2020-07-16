var db = require("../models");

function apiRoutes(app){
   app.get("/api/questions", function(req,res){
       db.Question.find().then(results => {
           res.json(results)
       })
   })
   app.post("/api/questions", function(req, res){
        db.Question.create(req.body).then(results => {
            res.json(results);
       })
   })
    
}

module.exports = apiRoutes