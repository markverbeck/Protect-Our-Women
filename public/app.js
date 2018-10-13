



$(document).ready(function(){

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
    
    messages.push(message);
    user_names.push(user_name);

    $(".chat_messages").empty();
    display_messages();

    
    $(".name").addClass("grey_chat_line");
    
    
    $("#message").val("");

  })

});