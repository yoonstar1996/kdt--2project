function mypage() {
  window.location.href = "/mypage";
}

function mypick() {
  window.location.href = "/mypick";
}

function myfix() {
  window.location.href = "/myfix";
}

axios({
  url: "/api/product/myproduct",
  method: "post",
  data: { id: sessionStorage.getItem("id") },
}).then((result) => {
  var i;
  for (i = 0; i < result.data.length; i++) {
    var pickList = document.querySelector(".pickList");
    const price = result.data[i].price;
    const comma = price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

    $(pickList).append(`
      <div class="my-item">
        <a class="pagelink" href="/product/${result.data[i].id}">
          <div>
            <img class="item-img" src="${result.data[i].img}">
            <div class="item-info">
              <div class="item-text">
                <h4 class="item-text-name">${result.data[i].title}</h4>
                <div class="item-text-category">${categories[result.data[i].category_id]}</div>
                <div class="item-text-content">${result.data[i].content}</div>
                <div class="item-text-price">${comma}원</div>
              </div>
            </div>
          </div>
        </a>
        <div class="item-cancel">
          <button type="button" class="item-fix-btn" onclick="itemFix(this, ${result.data[i].id})">상품 수정</button>
          <button type="button" class="item-cancel-btn" onclick="itemDelete(this, ${result.data[i].id})">상품 삭제</button>
        </div>
      </div>
    `);
  }
});
