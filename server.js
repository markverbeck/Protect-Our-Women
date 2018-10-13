var express = require("express");
var bodyParser = require("body-parser");
var port = process.env.PORT || 4000;
var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// app.use("/", routes);

app.listen(port, function(){
  console.log("Listening on port " + port);
});