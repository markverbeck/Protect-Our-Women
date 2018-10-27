var express = require("express");
var socket = require("socket.io");
var bodyParser = require("body-parser");
var port = process.env.PORT || 4000;
var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// app.use("/", routes);

var server = app.listen(port, function(){
  console.log("Listening on port " + port);
});

// socket logic
var io = socket(server);

io.on('connection', function(socket){
  console.log('Made socket connection', socket.id);

  socket.on('sign_in', function(data){
    io.sockets.emit('sign_in', data);
  });

  socket.on('chat', function(data){
    io.sockets.emit('chat', data);
  });

  socket.on('status', function(data){
    io.sockets.emit('status', data);
  });

  socket.on('location/destination', function(data){
    io.sockets.emit("location/destination",data);

  });

  socket.on('arrived', function(data){
    io.sockets.emit("arrived",data);

  });

  socket.on('concerned_button', function(data){
    io.sockets.emit("concerned_button",data);

  });

  socket.on('worried_button', function(data){
    io.sockets.emit("worried_button",data);

  });

  socket.on('worried_alert', function(data){
    io.sockets.emit("worried_alert",data);

  });

  socket.on('afraid_button', function(data){
    io.sockets.emit("afraid_button",data);

  });

  socket.on('afraid_alert', function(data){
    io.sockets.emit("afraid_alert",data);

  });

})