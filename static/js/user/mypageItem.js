var modal = document.querySelector(".myModal");
var bg = document.createElement("div");
var zIndex = 9999;

function modalClose() {
  bg.remove();
  modal.reset();
  modal.style.display = "none";
}

function addItem() {
  // 모달 div 뒤에 희끄무레한 레이어
  bg.setStyle({
    position: "fixed",
    zIndex: zIndex,
    left: "0px",
    top: "0px",
    width: "100%",
    height: "100%",
    overflow: "auto",
    // 레이어 색갈은 여기서 바꾸면 됨
    backgroundColor: "rgba(0,0,0,0.4)",
  });
  document.body.append(bg);

  // 닫기 버튼 처리, 시꺼먼 레이어와 모달 div 지우기

  modal.querySelector(".modalClose").addEventListener("click", function () {
    bg.remove();
    modal.reset();
    modal.style.display = "none";
  });

  modal.setStyle({
    position: "fixed",
    display: "flex",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",

    // 시꺼먼 레이어 보다 한칸 위에 보이기
    zIndex: zIndex + 1,

    // div center 정렬
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    msTransform: "translate(-50%, -50%)",
    webkitTransform: "translate(-50%, -50%)",
  });
}

// Element 에 style 한번에 오브젝트로 설정하는 함수 추가
Element.prototype.setStyle = function (styles) {
  for (var k in styles) this.style[k] = styles[k];
  return this;
};

//   document.getElementById("modalOn").addEventListener("click", function () {
//     // 모달창 띄우기
//     modal("my_modal");
//   });

function modalAddItem() {
  const form = document.querySelector(".myModal");
  const category = document.querySelector(".category");
  const formData = new FormData();
  const file = document.querySelector(".img");

  formData.append("user_id", "1234");
  formData.append("title", form.title.value);
  formData.append("img", file.files[0]);
  formData.append("adult", true);
  formData.append("price", parseInt(form.price.value));
  formData.append("position", "마포구");
  formData.append("category", category.value);
  formData.append("content", form.content.value);

  axios({
    headers: {
      "Content-Type": "multipart/form-data",
    },
    url: "/api/product",
    method: "post",
    data: formData,
  }).then((response) => {
    if (response) {
      console.log(response);
      var itemList = document.querySelector(".itemList");
      $(itemList).append(`
      <div class="my-item">
        <img class="item-img" src="/uploads/">
        <div class="item-info">
          <div class="item-text">
            <h4 class="item-text-name">${response.data.title}</h4>
            <div class="item-text-price">${response.data.price}</div>
            <div class="item-text-category">${response.data.category}</div>
            <div class="item-text-content">${response.data.content}</div>
          </div>
        </div>
      </div>
      `);
      // console.log(response);
      modalClose();
    } else {
      alert("상품 등록 실패");
    }
  });
}
