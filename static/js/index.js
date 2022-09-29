$(".post-wrapper").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
});

function heart(id, btn) {
  var myheart = $(btn).children("i");
  if ($(myheart).hasClass("heart1")) {
    $(myheart).removeClass("heart1").addClass("heart-click");
  } else $(myheart).removeClass("heart-click").addClass("heart1");
}

axios({
  url: "/api/products",
  method: "post",
}).then((result) => {
  console.log(result.data);
  var product = result.data;

  for (var i = 0; i < 7; i++) {
    var imglist = product[i].img.split("..");
    console.log(imglist);
    $(".new-first")
      .append(`<div class="newb col-xs-6 col-sm-6 col-md-4 col-lg-3">
      <div class="new-box2">
      <a class="link-wrap" href="/product/${product[i].id}"><img class="box-image" src="${product[i].img}" style="width: 150px; height: 150px";>
      </div>
      <div class="box-title">${product[i].title}</div>
      <div class="box-price">${product[i].price}<span>원</span></div></a>
      <button class="heart" type="button" onclick="heart(${product[i].id}, this)"><i class="heart1 fa-solid fa-heart fa-xl"></i></button>
    </div>`);
  }
});
