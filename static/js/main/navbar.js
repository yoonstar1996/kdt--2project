if (sessionStorage.getItem("id")) {
  const navTop = document.querySelector(".nav-top");
  navTop.classList.add("d-none");
} else {
  const navTopLogged = document.querySelector(".nav-top-logged");
  navTopLogged.classList.add("d-none");
}

if (sessionStorage.getItem("id")) {
  const navTop = document.querySelector(".nav-top");
  navTop.classList.add("d-none");
} else {
  const navTopLogged = document.querySelector(".nav-top-logged");
  const heartbtn = document.querySelectorAll(".heart");
  navTopLogged.classList.add("d-none");
  heartbtn.classList.add("d-none");
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
function filter() {
  var value, name, item, i;

  value = document.getElementById("search").value.toUpperCase();
  item = document.getElementsByClassName("item-info");

  for (i = 0; i < item.length; i++) {
    name = item[i].getElementsByClassName("item-text-name");
    if (name[0].innerHTML.toUpperCase().indexOf(value) > -1) {
      item[i].style.display = "flex";
    } else {
      item[i].style.display = "none";
    }
  }
}
function searchBtn() {
  searchInput = document.querySelector("#search");
  keyword = searchInput.value;
  if (keyword == "") {
    return;
  } else {
    window.location.href = `/search/${keyword}`;
  }

  var search = document.querySelector("#search");
  search.addEventListener("keydown", ({ key }) => {
    if (key == "Enter") {
      searchBtn();
    }
  });
}
