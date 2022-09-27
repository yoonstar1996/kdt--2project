$(document).ready(function () {
  $(".toggle").click(function () {
    $(".toggle").toggleClass("active");
  });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("#btnTop").show();
  } else {
    $("#btnTop").hide();
  }
});
$("#btnTop").on("click", (e) => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

$(".toggle").click(function () {
  if ($("#category").hasClass("category-set-off")) {
    $("#category").removeClass("category-set-off");
    $("#category").addClass("category-set-on");
  } else if ($("#category").hasClass("category-set-on")) {
    $("#category").removeClass("category-set-on");
    $("#category").addClass("category-set-off");
  }
});

var media = window.matchMedia(mediaQueryString);
matchMedia("screen and (orientation:portrait)");
matchMedia(
  "only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1)"
);
var m = matchMedia("screen and (max-width: 1145px)");
m.media; // -> "screen and (min-width: 1024px)"
m.matches; // -> true

if (matchMedia("screen and (max-width: 1145px)").matches) {
  // 1145px 이상에서 사용할 JavaScript
  console.log("1145h.i");
  // $(".container-1").addClass("d-none");
  // $("#searching-bar").removeClass("d-none");
  // $("#searching").removeClass("d-none");
} else if (matchMedia("screen and (max-width: 900px)").matches) {
  // 900px 미만에서 사용할 javascript
}
