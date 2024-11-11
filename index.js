$(document).ready(function () {
  $("#light-mode").click(function () {
    $("body").removeClass("dark-mode");
    $("#logo").attr("src", "uade_logo.svg");
  });
  $("#dark-mode").click(function () {
    $("body").addClass("dark-mode");
    $("#logo").attr("src", "uade_logo.png");
  });
});
