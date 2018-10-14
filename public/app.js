
$(document).ready(function(){

  var socket = io.connect("https://lit-ravine-11381.herokuapp.com/");

  var messages = [];
  var user_names = [];

  var display_messages = function(){
    for (var i = 0; i < messages.length; i++) {
      var mess = "<span class='mess'>" + messages[i] + "</span>";
      var chat_message = "<p class='name'>" + user_names[i] + ": " + mess + "</p>";
      $(".chat_messages").append(chat_message);
    }
  }

  $("#send").click(function(){
    var user_name = $("#user_name").val();
    var message = $("#message").val();

    socket.emit("chat", {
      socket_message: message,
      socket_user: user_name
    });
    
  })

  socket.on('chat', function(data){
    messages.push(data.socket_message);
    user_names.push(data.socket_user);

    $(".chat_messages").empty();
    display_messages();

    
    $(".name").addClass("grey_chat_line");
    
    
    $("#message").val("");
  });

});