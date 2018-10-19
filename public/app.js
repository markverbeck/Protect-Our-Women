
$(document).ready(function(){

  var socket = io.connect("http://localhost:4000/");

  //lit-ravine-11381.herokuapp.com/

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

  $("#fine").click(function(){
    var user_name = $("#user_name").val();

    socket.emit("status", {
      socket_user: user_name,
      socket_status: "btn-success",
      alert_status: "fine"
    });

    

  });

  $("#btn-concerned").click(function(){
    var user_name = $("#user_name").val();

    socket.emit("status", {
      socket_user: user_name,
      socket_status: "concerned",
      alert_status: "concerned"

    });

    

  });

  $("#worried").click(function(){
    var user_name = $("#user_name").val();

    socket.emit("status", {
      socket_user: user_name,
      socket_status: "btn-warning",
      alert_status: "worried"

    });

    

  });


    $("#afraid").click(function(){
    var user_name = $("#user_name").val();

    socket.emit("status", {
      socket_user: user_name,
      socket_status: "btn-danger",
      alert_status: "afraid"

    });

   
  });

    // ------ Location/Destination buttons ------

    $(".loc_dest").click(function(){
      var user_name = $("#user_name").val();
      var location = $(".location_input").val();
      var destination = $(".destination_input").val();

      socket.emit("location/destination", {
      socket_user: user_name,
      socket_location: location,
      socket_destination: destination

    });
    })

  

  // --- Socket Functions --
  socket.on('sign_in', function(data){
    console.log(data.socket_user);
        var friend_div = "<div class='row'><div class='col-lg-4'><p class='f_name'>" + data.socket_user +  "<span id='" + data.socket_user +"' class='btn-success' style='padding: 0px 10px; width:23%; border: black solid 1px; margin-left: .1em;' ></span></p>" + "</div><div class='col-lg-8'><p class='location_" + data.socket_user + "'>Location: <span class='specefic_loc'>" + data.socket_location + "</span></p><p class='destination_" + data.socket_user + "'>Destination: <span class='specefic_dest'></span></p></div></div>";


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

  
  socket.on('status', function(data){

    var className = $("#" + data.socket_user).attr('class');
    
    $("#" + data.socket_user).toggleClass(className + "");
    $("#" + data.socket_user).addClass(data.socket_status);

    messages.push("has changed her status to " + data.alert_status);
    user_names.push(data.socket_user);

    $(".chat_messages").empty();
    display_messages();

    
    $(".name").addClass("grey_chat_line");
  });

  socket.on('location/destination', function(data){

    if(data.socket_location === ''){
      console.log("no location");
    }else{
      $(".location_" + data.socket_user).html("Location: " + data.socket_location);
      $(".location_input").val('');
    }

    if(data.socket_destination === ''){
      console.log("no destination");
    }else{
      $(".destination_" + data.socket_user).html("Destination: " + data.socket_destination);
      $(".destination_input").val('');
    }

  });



});