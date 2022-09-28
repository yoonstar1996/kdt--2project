$(".post-wrapper").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
});

axios({
  url: "/api/products",
  method: "post",
}).then((result) => {
  console.log(result.data);
  var product = result.data;
  for (var i = 0; i < 7; i++) {
    $(".new-first")
      .append(`<div class="newb col-xs-6 col-sm-6 col-md-4 col-lg-3">
      <div class="new-box2"><img src="${product[i].img}" style="width: 150px; height: 150px";></div>
      <div class="box-title">${product[i].title}</div>
      <div class="box-price">${product[i].price}<span>원</span></div>
    </div>`);
  }
});
