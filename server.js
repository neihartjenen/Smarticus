var express = require("express");
var app = express()
var Port = process.env.PORT || 3001;

var mongoose = require("mongoose");
var db = mongoose.connection;

app.use(express.urlencoded({extended: true}))

app.use(express.json())

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
      });  
}

var apiroutes = require("./routes/routes");

apiroutes(app);

mongoose.connect(process.env.MONGODB_URI|| "mongodb://localhost/smarti" )

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("connected")
})

app.listen(Port, function(){
    console.log("app is listening on:"+ Port)
})