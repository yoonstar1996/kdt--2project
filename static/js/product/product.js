function heart() {
  var myheart = $(".heart-1").children("i");
  if ($(myheart).hasClass("heart-i")) {
    $(myheart).removeClass("heart-i").addClass("heart-click");
  } else $(myheart).removeClass("heart-click").addClass("heart-i");
}
