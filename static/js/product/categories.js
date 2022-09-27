// 상품목록 리스트 (페이지네이션) 시작
$(function () {
  let container = $("#pagination");
  const category = "<%=category%>";
  console.log(category);
  axios({
    url: `/categories/${category}`,
    method: "post",
    data: { category: category },
  }).then((result) => {
    console.log(result.data);
  });

  container.pagination({
    dataSource: [
      {
        img: "<img src='https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2022/02/17/18/6/c0373995-8b2e-4cc6-a6f8-9a3abb2d6f56.jpg' class='card-img-top' alt='...' />",
        name: "<h5 class='card-title'>갤럭시s21 너무 많아요</h5>",
        id: "<p class='card-text'>헤헤헤</p>",
        address: "<p class='card-text'>신당동</p>",
        price: "<p class='card-text'>123,000원</p>",
        categories: "<p class='card-text elec'>전자제품</p>",
      },
      {
        img: "<img src='https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3830582162733443-96014079-fd13-4849-82df-fd2e457f0e4b.png' class='card-img-top' alt='...' />",
        name: "<h5 class='card-title'>갤럭시폴드3 급처!</h5>",
        id: "<p class='card-text'>호로로</p>",
        address: "<p class='card-text'>신두동</p>",
        price: "<p class='card-text'>13,000원</p>",
        categories: "<p class='card-text elec'>전자제품</p>",
      },
      {
        img: "<img src='https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1042682481482349-572328bc-69d2-4b30-a8e0-23bb599f936a.png' class='card-img-top' alt='...' />",
        name: "<h5 class='card-title'>갤럭시s21 본체만!!</h5>",
        id: "<p class='card-text'>짜르르</p>",
        address: "<p class='card-text'>신데동</p>",
        price: "<p class='card-text'>13,000원</p>",
        categories: "<p class='card-text elec'>전자제품</p>",
      },
      {
        img: "<img src='https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2022/02/17/18/3/f8c39355-31f0-4cc1-b462-d63b2224b7c1.jpg' class='card-img-top' alt='...' />",
        name: "<h5 class='card-title'>갤럭시노트20 지겨워요</h5>",
        id: "<p class='card-text'>찌르르</p>",
        address: "<p class='card-text'>신더동</p>",
        price: "<p class='card-text'>13,000원</p>",
        categories: "<p class='card-text elec'>전자제품</p>",
      },
      {
        img: "<img src='https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3830243979425524-9c6be638-e4f8-4877-86ee-4d691675f5e1.png' class='card-img-top' alt='...' />",
        name: "<h5 class='card-title'>갤럭시z플립4 새것이에요</h5>",
        id: "<p class='card-text'>르르르</p>",
        address: "<p class='card-text'>신주동</p>",
        price: "<p class='card-text'>13,000원</p>",
        categories: "<p class='card-text elec'>전자제품</p>",
      },
      {
        img: "<img src='https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2137015777995977-96cb80bc-af2a-430c-b33d-a718165bf5da.jpg' class='card-img-top' alt='...' />",
        name: "<h5 class='card-title'>아이폰13프로에요</h5>",
        id: "<p class='card-text'>라라라</p>",
        address: "<p class='card-text'>신고동</p>",
        price: "<p class='card-text'>13,000원</p>",
        categories: "<p class='card-text elec'>전자제품</p>",
      },
      {
        img: "<img src='https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/10147305712174315-161d4e27-bba7-405f-b4ec-6827e8cb7988.jpg' class='card-img-top' alt='...' />",
        name: "<h5 class='card-title'>고오급진 냉장고</h5>",
        id: "<p class='card-text'>차르르</p>",
        address: "<p class='card-text'>연세동</p>",
        price: "<p class='card-text'>133,000원</p>",
        categories: "<p class='card-text lifeelec'>생활/가전</p>",
      },
      {
        img: "<img src='https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/536185878844360-fa6c549e-05a4-4755-ac37-97c56b8a8e9c.jpg' class='card-img-top' alt='...' />",
        name: "<h5 class='card-title'>와인 냉장고</h5>",
        id: "<p class='card-text'>서서서</p>",
        address: "<p class='card-text'>남남동</p>",
        price: "<p class='card-text'>14,000원</p>",
        categories: "<p class='card-text lifeelec'>생활/가전</p>",
      },
      {
        img: "<img src='https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2137015777995977-96cb80bc-af2a-430c-b33d-a718165bf5da.jpg' class='card-img-top' alt='...' />",
        name: "<h5 class='card-title'>아이폰13프로일까요</h5>",
        id: "<p class='card-text'>베베베</p>",
        address: "<p class='card-text'>도도동</p>",
        price: "<p class='card-text'>93,000원</p>",
        categories: "<p class='card-text elec'>생활/가전</p>",
      },
      {
        img: "<img src='https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/d1da/32e062b6c91279cfaf61dbe0796b2f90c5f34fcbbcdf4a535484c480d34c.jpg' class='card-img-top' alt='...' />",
        name: "<h5 class='card-title'>전기자전거 안써요</h5>",
        id: "<p class='card-text'>제제노</p>",
        address: "<p class='card-text'>수도동</p>",
        price: "<p class='card-text'>22,000원</p>",
        categories: "<p class='card-text lifeelec'>생활/가전</p>",
      },
      {
        img: "<img src='https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/6558/c76e08f53e702ff171af5e84251bfb5f9c36daccae7ff27f0d55a8c455eb.jpg' class='card-img-top' alt='...' />",
        name: "<h5 class='card-title'>usb 8tb</h5>",
        id: "<p class='card-text'>사더오</p>",
        address: "<p class='card-text'>대대동</p>",
        price: "<p class='card-text'>8,000원</p>",
        categories: "<p class='card-text lifeelec'>생활/가전</p>",
      },
      {
        img: "<img src='https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/24628599404929-7fd7bec3-6738-44fb-94ae-0d2ba654c9b9.jpg' class='card-img-top' alt='...' />",
        name: "<h5 class='card-title'>청소기</h5>",
        id: "<p class='card-text'>추도도</p>",
        address: "<p class='card-text'>세세동</p>",
        price: "<p class='card-text'>11,000원</p>",
        categories: "<p class='card-text lifeelec'>생활/가전</p>",
      },
      {
        img: "<img src='' class='card-img-top' alt='...' />",
        user_id: "<h5 class='card-title'>갤럭시s21 너무 많아요</h5>",
        category_id: "<p class='card-text'>헤헤헤</p>",
        title: "<p class='card-text'>신당동</p>",
        position: "<p class='card-text'>123,000원</p>",
        content: "<p class='card-text elec'>전자제품</p>",
        price: "",
      },
    ],

    pageSize: 6,
    callback: function (data, pagination) {
      var dataHtml = "";

      $.each(data, function (index, item) {
        dataHtml +=
          "<div class='col'>" +
          "<div class='card h-100'>" +
          item.img +
          "<div class='card-body'>" +
          item.id +
          item.name +
          item.address +
          item.price +
          item.categories +
          "<br>" +
          "</div>" +
          "</div>" +
          "</div>";
      });

      dataHtml += "";

      $("#data-container").html(dataHtml);
    },
  });
});
// 상품목록 리스트 (페이지네이션) 끝
// ----------------------------------------------

// 카테고리 필터 기능 시작
// const filterContainer = document.querySelector(".navi-select"),
//   cardItems = document.querySelectorAll("#data-container");

// filterContainer.addEventListener("change", (event) => {
//   console.log("aaaa");
//   if (event.target.classList.contains("filter-item")) {
//     // deactivate existing active 'filter-item'
//     filterContainer.querySelector(".active").classList.remove("active");
//     console.log("bbbb");
//     // activate new 'filter-item'
//     event.target.classList.add("active");
//     const filterValue = event.target.getAttribute(value);
//     console.log(filterValue);
//     cardItems.forEach((item) => {
//       if (item.classList.contains(filterValue) || filterValue === "all") {
//         item.classList.remove("hide");
//         item.classList.add("show");
//       } else {
//         item.classList.remove("show");
//         item.classList.add("hide");
//       }
//     });
//   }
// });

// $(".navi-select").on("change", function () {
//   var filter = $(this).val();
//   console.log(filter);
//   $(".pagenation-container .col").addClass("d-none");
//   if (filter == "all") {
//     $(".pagenation-container .col").removeClass("d-none");
//   } else {
//     console.log("." + filter, $("." + filter).parents(".col"));
//     $("." + filter)
//       .parents(".col")
//       .removeClass("d-none");
//   }
// });

// 카테고리 필터 기능 끝
