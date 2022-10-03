let orderCounter = "new";
// 상품목록 리스트 (페이지네이션) 시작
$(function () {
  pgn("new", 8);
});
// 데이터 값 넣는것
// date.sort((a, b) => a.price - b.price);
// createList(data);

function createList(data) {
  var dataHtml = "";

  var is_diplay = "";
  // console.log(sessionStorage.getItem("id"));
  if (sessionStorage.getItem("id") == null) {
    is_diplay = "d-none";
  }
  $.each(data, function (index, el) {
    dataHtml +=
      "<div>" +
      "<a class='adeco' href='/product/" +
      el.idnumValue +
      "'>" +
      "<div class= 'col-xs-12 col-sm-6 col-xl-4 hesize'>" +
      "<div class='col'>" +
      "<div class='card h-100'>" +
      el.img +
      "<div class='card-body'>" +
      el.name +
      el.user_id +
      el.address +
      el.price +
      el.categoryValue +
      "</div>" +
      "</div>" +
      "</div>" +
      "</a>" +
      // "<br />" +
      "<div style= 'height:0;'>" +
      "<button class='heart " +
      is_diplay +
      `' type='button' onclick='heart(this, ${el.idnumValue})'>` +
      `<i class='${
        el.count ? "heart-click" : "heart1"
      } fa-solid fa-heart fa-xl'>` +
      "</i>" +
      "</button>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "<br />";
  });
  dataHtml += "";
  return dataHtml;
}
// 낮은가격순 정렬
function handleOnLow() {
  orderCounter = "low";
  pgn(orderCounter, 8);
}
// 높은가격순 정렬
function handleOnHigh() {
  orderCounter = "high";
  pgn(orderCounter, 8);
}

// 최신가격순 정렬
function handleOnNew() {
  orderCounter = "new";
  pgn(orderCounter, 8);
}

function myFunction(obj) {
  // var val6new = pgn("new", 8);
  // var val3new = pgn("new", 4);

  if (obj.value == "8") pgn(orderCounter, 8);
  else if (obj.value == "4") pgn(orderCounter, 4);
  // console.log(myFunction);
}

// 찜 하트기능 시작

function heart(btn, product_id) {
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
// 찜 하트기능 끝
