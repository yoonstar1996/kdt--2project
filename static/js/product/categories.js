let orderCounter = "new";
// 상품목록 리스트 (페이지네이션) 시작
$(function () {
  pgn("new", 6);
});
// 데이터 값 넣는것
// date.sort((a, b) => a.price - b.price);
// createList(data);

function createList(data) {
  var dataHtml = "";

  $.each(data, function (index, el) {
    dataHtml +=
      "<a class='adeco' href='/product/" +
      el.idnumValue +
      "'>" +
      "<div class= 'col-xs-12 col-sm-6 col-xl-4'>" +
      "<div class='col'>" +
      "<div class='card h-100'>" +
      el.img +
      "<div class='card-body'>" +
      el.name +
      el.id +
      el.address +
      el.price +
      el.categoryValue +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "<br/>" +
      "</a>";
  });
  dataHtml += "";
  return dataHtml;
}
// 낮은가격순 정렬
function handleOnLow() {
  orderCounter = "low";
  pgn(orderCounter, 6);
}
// 높은가격순 정렬
function handleOnHigh() {
  orderCounter = "high";
  pgn(orderCounter, 6);
}

// 최신가격순 정렬
function handleOnNew() {
  orderCounter = "new";
  pgn(orderCounter, 6);
}

function myFunction(obj) {
  // var val6new = pgn("new", 6);
  // var val3new = pgn("new", 3);

  if (obj.value == "6") pgn(orderCounter, 6);
  else if (obj.value == "3") pgn(orderCounter, 3);
  console.log(myFunction);
}
