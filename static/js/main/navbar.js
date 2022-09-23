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
