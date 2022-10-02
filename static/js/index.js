$(".post-wrapper").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
});

function heart(product_id, btn) {
  var myheart = $(btn).children("i");
  if ($(myheart).hasClass("heart1")) {
    $(myheart).removeClass("heart1").addClass("heart-click");
    alert("관심목록에 추가되었습니다.");
    axios({
      url: "/api/like",
      method: "post",
      data: {
        user_id: sessionStorage.getItem("id"),
        product_id: product_id,
      },
    }).then((result) => {});
  } else {
    axios({
      url: "/api/like_delete",
      method: "delete",
      data: {
        user_id: sessionStorage.getItem("id"),
        product_id: product_id,
      },
    }).then((result) => {});
    $(myheart).removeClass("heart-click").addClass("heart1");
  }
}

axios({
  url: "/api/products",
  method: "post",
}).then((result) => {
  var product = result.data;

  for (var i = 0; i < 7; i++) {
    var imglist = product[i].img.split("..");
    var money = product[i].price
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    $(".new-first")
      .append(`<div class="newb col-xs-6 col-sm-6 col-md-4 col-lg-3">
      <div class="new-box2">
      <a class="link-wrap" href="/product/${product[i].id}"><img class="box-image" src="${product[i].img}" style="width: 150px; height: 150px; object-fit: cover;">
      </div>
      <div class="box-title">${product[i].title}</div>
      <div class="box-price">${money}<span>원</span></div></a>
      <button class="heart d-none" type="button" onclick="heart(${product[i].id}, this)"><i class="heart1 fa-solid fa-heart fa-xl"></i></button>
    </div>`);
  }

  const heartbtn = document.querySelectorAll(".heart");
  if (sessionStorage.getItem("id")) {
    // heartbtn.classList.remove("d-none");
    for (let i = 0; i < heartbtn.length; i++) {
      heartbtn[i].classList.remove("d-none");
    }
  } else {
    // heartbtn.classList.add("d-none");
    for (let i = 0; i < heartbtn.length; i++) {
      heartbtn[i].classList.add("d-none");
    }
  }
});
