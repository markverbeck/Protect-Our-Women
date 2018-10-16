
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


  // --- Sign In Button ---

  $("#signIn").click(function(){
    var user_name = $("#user_name").val();
    var location = $("#location").val();
    console.log(location);

    socket.emit("sign_in", {
      socket_location: location,
      socket_user: user_name
    });

    $(".sign_in_div").css({"display": "none"});
    $(".signed_in_div").css({"display": "unset"});
    
  });

   // --- message button ---

  $("#message").click(function(){
    var user_name = $("#user_name").val();
    var message = $("#message_input").val()

    socket.emit("chat", {
      socket_message: message,
      socket_user: user_name
    });

  });

  // --- Socket Functions --
  socket.on('sign_in', function(data){
    console.log(data.socket_user);
        var friend_div = "<div class='row'><div class='col-lg-4'><p class='f_name'>" + data.socket_user + "</p>" + "</div><div class='col-lg-8'><p class='location'>Location: <span class='specefic_loc'>" + data.socket_location + "</span></p></div></div>";


        $(".list_friends").append(friend_div);

    
  });

  socket.on('chat', function(data){
    messages.push(data.socket_message);
    user_names.push(data.socket_user);

    $(".chat_messages").empty();
    display_messages();

    
    $(".name").addClass("grey_chat_line");
    
    
    $("#message_input").val("");
  });

});