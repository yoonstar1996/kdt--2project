if (sessionStorage.getItem("id")) {
  const navTop = document.querySelector(".nav-top");
  navTop.classList.add("d-none");
} else {
  const navTopLogged = document.querySelector(".nav-top-logged");
  navTopLogged.classList.add("d-none");
}

if (sessionStorage.id == sessionStorage.id) {
  var nameposition = document.querySelector(".nameposition");
  nameposition.innerHTML = sessionStorage.id;
}

function logout() {
  sessionStorage.removeItem("id");
  window.location.href = "/";
}

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

function searchBtn() {
  searchInput = document.querySelector("#search");
  keyword = searchInput.value;
  if (keyword == "") {
    return;
  } else {
    window.location.href = `/search/${keyword}`;
  }
}

var search = document.querySelector("#search");
search.addEventListener("keydown", ({ key }) => {
  if (key == "Enter") {
    searchBtn();
  }
});
var media = window.matchMedia(mediaQueryString);
matchMedia("screen and (orientation:portrait)");
matchMedia("only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1)");
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
