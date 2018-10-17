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

  socket.on('alert', function(data){
    socket.broadcast.emit("status",data);

  })

})