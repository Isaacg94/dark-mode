$(document).ready(function() {
  $("button#dark").click(function() {
    $("body, .card").removeClass();
    $("body, .card").addClass("dark-background");
    $(".intro, .card-body, .content, .force-left").css("color", "white");
  });
  $("button#light").click(function() {
    $("body, .card").removeClass();
    $("body, .card").addClass("light-background");
    $(".intro, .card-body, .content, .force-left").css("color", "black");
  });
});
