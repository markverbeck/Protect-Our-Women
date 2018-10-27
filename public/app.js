
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
    var phone_number = $("#phone_number").val();
    console.log(location);

    socket.emit("sign_in", {
      socket_location: location,
      socket_user: user_name,
      socket_phone: phone_number
    });

    $(".sign_in_div").css({"display": "none"});
    $(".signed_in_div").css({"display": "unset"});
    
  });

   // --- message button ---

  $("#message").click(function(){
    var user_name = $("#user_name").val();
    var message = $("#message_input").val();

    socket.emit("chat", {
      socket_message: message,
      socket_user: user_name
    });

  });

  $("#fine").click(function(){
    var user_name = $("#user_name").val();
    $("#concerned_buttons").css({"display": "none"});
    $("#worried_buttons").css({"display": "none"});
    $("#worried_alerts").css({"display": "none"});
    $("#afraid_buttons").css({"display": "none"});
    $("#afraid_alerts").css({"display": "none"});


    socket.emit("status", {
      socket_user: user_name,
      socket_status: "btn-success",
      alert_status: "fine"
    });

    

  });

  $("#btn-concerned").click(function(){
    var user_name = $("#user_name").val();
    $("#concerned_buttons").css({"display": "block"});
    $("#worried_buttons").css({"display": "none"});
    $("#worried_alerts").css({"display": "none"});
    $("#afraid_buttons").css({"display": "none"});
    $("#afraid_alerts").css({"display": "none"});


    socket.emit("status", {
      socket_user: user_name,
      socket_status: "concerned",
      alert_status: "concerned"

    });

    

  });

  $("#worried").click(function(){
    var user_name = $("#user_name").val();
    $("#concerned_buttons").css({"display": "none"});
    $("#worried_buttons").css({"display": "block"});
    $("#worried_alerts").css({"display": "block"});
    $("#afraid_buttons").css({"display": "none"});
    $("#afraid_alerts").css({"display": "none"});



    socket.emit("status", {
      socket_user: user_name,
      socket_status: "btn-warning",
      alert_status: "worried"

    });

    

  });


    $("#afraid").click(function(){
    var user_name = $("#user_name").val();
    $("#concerned_buttons").css({"display": "none"});
    $("#worried_buttons").css({"display": "none"});
    $("#worried_alerts").css({"display": "none"});
    $("#afraid_buttons").css({"display": "block"});
    $("#afraid_alerts").css({"display": "block"});





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

    // ------ Arrived ------

    $(".arrived").click(function(){

      var user_name = $("#user_name").val();
      
      
      socket.emit("arrived", {
      socket_user: user_name

    });

    });

    // ------ Concerned Buttons ------

    $(".come_tm").click(function(){
    var user_name = $("#user_name").val();
    var message = $(".come_tm").val();


      socket.emit("concerned_button", {
      socket_message: message,
      socket_user: user_name

    });
    });

    $(".coming_ty").click(function(){
    var user_name = $("#user_name").val();
    var message = $(".coming_ty").val();


      socket.emit("concerned_button", {
      socket_message: message,
      socket_user: user_name

    });
    });

    $(".where_ay").click(function(){
    var user_name = $("#user_name").val();
    var message = $(".where_ay").val();


      socket.emit("concerned_button", {
      socket_message: message,
      socket_user: user_name

    });
    });

    // ------ Worried Buttons ------

    $(".myself").click(function(){
    var user_name = $("#user_name").val();
    var message = $(".myself").val();


      socket.emit("worried_button", {
      socket_message: message,
      socket_user: user_name

    });
    });

    $(".group_member").click(function(){
    var user_name = $("#user_name").val();
    var message = $(".group_member").val();


      socket.emit("worried_button", {
      socket_message: message,
      socket_user: user_name

    });
    });

    $(".group").click(function(){
    var user_name = $("#user_name").val();
    var message = $(".group").val();


      socket.emit("worried_button", {
      socket_message: message,
      socket_user: user_name

    });
    });

    // ------ Worried alerts ------

    $(".potential").click(function(){
      var user_name = $("#user_name").val();
      var message = $(".potential").val();

      socket.emit("worried_alert", {
      socket_message: message,
      socket_user: user_name

    });
    });

    $(".verbal").click(function(){
      var user_name = $("#user_name").val();
      var message = $(".verbal").val();

      socket.emit("worried_alert", {
      socket_message: message,
      socket_user: user_name

    });
    });

    $(".physical").click(function(){
      var user_name = $("#user_name").val();
      var message = $(".physical").val();

      socket.emit("worried_alert", {
      socket_message: message,
      socket_user: user_name

    });
    });

    // ------ Afraid Buttons ------

    $(".myself_afraid").click(function(){
    var user_name = $("#user_name").val();
    var message = $(".myself_afraid").val();


      socket.emit("afraid_button", {
      socket_message: message,
      socket_user: user_name

    });
    });

    $(".group_member_afraid").click(function(){
    var user_name = $("#user_name").val();
    var message = $(".group_member_afraid").val();


      socket.emit("afraid_button", {
      socket_message: message,
      socket_user: user_name

    });
    });

    $(".group_afraid").click(function(){
    var user_name = $("#user_name").val();
    var message = $(".group_afraid").val();


      socket.emit("afraid_button", {
      socket_message: message,
      socket_user: user_name

    });
    });

    // ------ Afraid Alerts ------

    $(".danger").click(function(){
      var user_name = $("#user_name").val();
      var message = $(".danger").val();

      socket.emit("afraid_alert", {
      socket_message: message,
      socket_user: user_name

    });
    });

    $(".threatened").click(function(){
      var user_name = $("#user_name").val();
      var message = $(".threatened").val();

      socket.emit("afraid_alert", {
      socket_message: message,
      socket_user: user_name

    });
    });

    $(".attacked").click(function(){
      var user_name = $("#user_name").val();
      var message = $(".attacked").val();

      socket.emit("afraid_alert", {
      socket_message: message,
      socket_user: user_name

    });
    });

    // ------ Clear alert messages ------

    $(".clear_button").click(function(){
    var user_name = $("#user_name").val();
    var message = $(".clear_button").val();


      socket.emit("concerned_button", {
      socket_message: message,
      socket_user: user_name

    });
    });

    $(".clear_alert").click(function(){
    var user_name = $("#user_name").val();
    var message = $(".clear_alert").val();


      socket.emit("worried_alert", {
      socket_message: message,
      socket_user: user_name

    });
    });
  

  // --- Socket Functions --
  socket.on('sign_in', function(data){
    console.log(data.socket_user);
        var friend_div = "<div class='row' style='border-bottom: black solid 1px; border-top: black solid 1px;'><div class='col-lg-4'><a  href='tel: " + data.socket_phone + "' class='f_name'>" + data.socket_user +  "<span id='" + data.socket_user +"' class='btn-success' style='padding: 0px 10px; width:23%; border: black solid 1px; margin-left: .1em;' ></span></a>" + "</div><div class='col-lg-8'><p class='location_" + data.socket_user + "'>Location: <span class='specefic_loc'>" + data.socket_location + "</span></p><p class='destination_" + data.socket_user + "'>Destination: <span class='specefic_dest'></span></p><p class='arrived_" + data.socket_user + "'></p></div><h3 class='quick_mess_" + data.socket_user + " text-center'></h3><h3 class='quick_alert_" + data.socket_user + " text-center'></h3></div>";


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
    $(".quick_mess_" + data.socket_user).html('');
    $(".quick_mess_" + data.socket_user).removeClass("grey_chat_line");
    $(".quick_mess_" + data.socket_user).css({"border": "none"});

    if(data.alert_status === "worried"){
      alert(data.socket_user + " has changed her status to " + data.alert_status);
    }else if(data.alert_status === "afraid"){
      alert(data.socket_user + " has changed her status to " + data.alert_status);
    }

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
      $(".arrived_" + data.socket_user).html("Haven't started trip");
      $(".arrived_" + data.socket_user).css({"color": "blue"});
    }

  });

  socket.on('arrived', function(data){
    var arrival = $(".arrived_" + data.socket_user).html();


    if(arrival === "Arrived"){
      $(".arrived_" + data.socket_user).html("Haven't started trip");
      $(".arrived_" + data.socket_user).css({"color": "blue"});
    }else if(arrival === "Haven't started trip"){
      $(".arrived_" + data.socket_user).html("Trip started, haven't arrived");
      $(".arrived_" + data.socket_user).css({"color": "red"});
      alert(data.socket_user + " has started her trip and hasn't arrived at her destination");
    }else{
      $(".arrived_" + data.socket_user).html("Arrived");
      $(".arrived_" + data.socket_user).css({"color": "green"});
      alert(data.socket_user + " has arrived at her destination");


    }


    
  })

  socket.on('concerned_button', function(data){
    if(data.socket_message === ''){
      $(".quick_mess_" + data.socket_user).html('');
      $(".quick_mess_" + data.socket_user).html(data.socket_message);
      $(".quick_mess_" + data.socket_user).removeClass("grey_chat_line");
      $(".quick_mess_" + data.socket_user).css({"border": "none"});

    }else {
      $(".quick_mess_" + data.socket_user).html('');
      $(".quick_mess_" + data.socket_user).html(data.socket_message);
      $(".quick_mess_" + data.socket_user).addClass("grey_chat_line");
      $(".quick_mess_" + data.socket_user).css({"color": "#fcee5a", "text-shadow": "1px 1px 1px black", "padding":".2em", "border": "black solid 1px", "margin": "0em auto .5em"});
    }

  });

  socket.on('worried_button', function(data){
    $(".quick_mess_" + data.socket_user).html('');
    $(".quick_mess_" + data.socket_user).html(data.socket_message);
    $(".quick_mess_" + data.socket_user).addClass("grey_chat_line");
    $(".quick_mess_" + data.socket_user).css({"color": "#ffc107", "text-shadow": "1px 1px 1px black", "padding":".2em", "border": "black solid 1px", "margin": ".5em auto .5em"});
  });

  socket.on('worried_alert', function(data){
    
    if(data.socket_message === ''){
      $(".quick_alert_" + data.socket_user).html('');
      $(".quick_alert_" + data.socket_user).html(data.socket_message);
      $(".quick_alert_" + data.socket_user).removeClass("grey_chat_line");
      $(".quick_alert_" + data.socket_user).css({"border": "none"});
    }else{

    $(".quick_alert_" + data.socket_user).html('');
    $(".quick_alert_" + data.socket_user).html(data.socket_message);
    $(".quick_alert_" + data.socket_user).addClass("grey_chat_line");
    $(".quick_alert_" + data.socket_user).css({"color": "#ffc107", "text-shadow": "1px 1px 1px black", "padding":".2em", "border": "black solid 1px", "margin": "0em auto .5em"});

    if(data.socket_message === "Potential Dangerous Situation."){
      alert(data.socket_user + " is in a " + data.socket_message);

    }else{
      alert(data.socket_user + " is " + data.socket_message);

    };
     
    };
  });

  socket.on('afraid_button', function(data){
    $(".quick_mess_" + data.socket_user).html('');
    $(".quick_mess_" + data.socket_user).html(data.socket_message);
    $(".quick_mess_" + data.socket_user).addClass("grey_chat_line");
    $(".quick_mess_" + data.socket_user).css({"color": "#dc3545", "text-shadow": "1px 1px 1px black", "padding":".2em", "border": "black solid 1px", "margin": ".5em auto .5em"});
  });

  socket.on('afraid_alert', function(data){
    $(".quick_alert_" + data.socket_user).html('');
    $(".quick_alert_" + data.socket_user).html(data.socket_message);
    $(".quick_alert_" + data.socket_user).addClass("grey_chat_line");
    $(".quick_alert_" + data.socket_user).css({"color": "#dc3545", "text-shadow": "1px 1px 1px black", "padding":".2em", "border": "black solid 1px", "margin": "0em auto .5em"});

    if(data.socket_message === "Dangerous Situation."){
      alert(data.socket_user + " is in a " + data.socket_message);
    }else if(data.socket_message === 'Threatened with violence.'){
      alert(data.socket_user + " has been " + data.socket_message);
    }else{
      alert(data.socket_user + " is " + data.socket_message);

    };
  });

});