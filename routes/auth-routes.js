var express =require("express");
var route= express.Router();
var axios = require("axios");
var db = require("../models");
module.exports = function (app) {
    // 

   route.get("/",function(req,res){
      
   })
   
    route.get("/logout", function (req, res) {
       
    });

        
    route.post("/signin/user", function(req,res) {
  
    });
    
}

module.exports = route;