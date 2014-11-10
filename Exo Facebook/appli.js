var accessToken = ''

$(function() {

  //listen click from button
  $("#connect-btn").on("click", function(e) {

    //get data from facebook
    $.get("https://graph.facebook.com/me?fields=name,birthday",
      { access_token: accessToken },
      function(data) {
        var name = data.name;
        var birthday = data.birthday;

        $("#my-profile").append(name + ", " + birthday);
      });
  });
});