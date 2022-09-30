var modal = document.querySelector(".myModal");
var bg = document.createElement("div");
var zIndex = 9999;

const categories = {
  life: "생활/가전",
  electro: "전자제품",
  fashion: "패션/의류",
  interior: "가구/인테리어",
  book: "도서/음반/티켓",
  food: "식품/잡화",
  pet: "반려동물",
};

function modalClose() {
  bg.remove();
  modal.reset();
  modal.style.display = "none";
}

function addItem(obj) {
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
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
<<<<<<< HEAD
=======

    // 시꺼먼 레이어 보다 한칸 위에 보이기
    zIndex: zIndex + 1,

    // div center 정렬
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    msTransform: "translate(-50%, -50%)",
    webkitTransform: "translate(-50%, -50%)",
  });

  document.querySelector(".addItemBtn").classList.remove("d-none");
  document.querySelector(".addFixBtn").classList.add("d-none");
}

function fixItem() {
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
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
>>>>>>> upstream/feature

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

///상품 등록///
function modalAddItem() {
  const form = document.querySelector(".myModal");
  const category = document.querySelector(".category");
  const formData = new FormData();
  const file = document.querySelector(".img");
  console.log(file.files);

  formData.append("user_id", sessionStorage.getItem("id"));
  formData.append("category_id", category.value);
  formData.append("title", form.title.value);
  // formData.append("img", Object.values(file.files));
  for (key in file.files) {
    formData.append("img", file.files[key]);
  }
  formData.append("adult", true);
  formData.append("price", form.price.value);
  formData.append("position", "마포구");
  formData.append("content", form.content.value);
  console.log(formData);
  axios({
    headers: {
      "Content-Type": "multipart/form-data",
    },
    url: "/api/product",
    method: "post",
    data: formData,
  }).then((response) => {
    if (response) {
      var itemList = document.querySelector(".itemList");
      const price = response.data.price;
      let img_list = response.data.img.split("..");
      const comma = price
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

      $(itemList).append(`
      <div class="my-item">
      <a class="pagelink" href="/product/${response.data.id}">
      <div>
        <img class="item-img" src="${img_list[0]}">
        <div class="item-info">
          <div class="item-text">
            <h4 class="item-text-name">${response.data.title}</h4>
            <div class="item-text-category">${
              categories[response.data.category_id]
            }</div>
            <div class="item-text-content">${response.data.content}</div>
            <div class="item-text-price">${comma}원</div>
          </div>
        </div>
        </div>
        </a>
        <div class="item-cancel">
          <button type="button" class="item-fix-btn" onclick="itemFix(this, ${
            response.data.id
          })">상품 수정</button>
          <button type="button" class="item-cancel-btn" onclick="itemDelete(this, ${
            response.data.id
          })">상품 삭제</button>
        </div>
        </div>
      `);
      modalClose();
      window.location.href = "/mypage";
    } else {
      alert("상품 등록 실패");
    }
  });
}

function itemDelete(obj, id) {
  axios({
    url: "/api/product/delete",
    method: "delete",
    data: { id: id },
  }).then((result) => {
    var parent1 = $(obj).parent("div"); /*item-cancel*/
    var parent2 = $(parent1).siblings("a"); /*pagelink*/
    var parent3 = $(parent2).parent("div"); /*my-item*/

    $(parent3).remove();
    window.location.href = "/mypage";
  });
}

///상품 불러오기////
axios({
  url: "/api/product/myproduct",
  method: "post",
  data: { id: sessionStorage.getItem("id") },
}).then((result) => {
  const List = document.querySelector(".no-item");
  const NoList = document.querySelector(".itemList");
  const addBtn = document.querySelector("#noModalOn");
  console.log(result.data.length);
  if (result.data.length) {
    List.classList.add("d-none");
    addBtn.classList.remove("d-none");
    NoList.classList.remove("d-none");
  } else {
    List.classList.remove("d-none");
    NoList.classList.add("d-none");
    addBtn.classList.add("d-none");
  }

  for (var i = 0; i < result.data.length; i++) {
    var itemList = document.querySelector(".itemList");
    const price = result.data[i].price;
    let img_list = result.data[i].img.split("..");
    const comma = price
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

    $(itemList).append(`
      <div class="my-item">
        <a class="pagelink" href="/product/${result.data[i].id}">
          <div>
            <img class="item-img" src="${img_list[0]}">
            <div class="item-info">
              <div class="item-text">
                <h4 class="item-text-name">${result.data[i].title}</h4>
                <div class="item-text-category">${
                  categories[result.data[i].category_id]
                }</div>
                <div class="item-text-content">${result.data[i].content}</div>
                <div class="item-text-price">${comma}원</div>
              </div>
            </div>
          </div>
        </a>
        <div class="item-cancel">
          <button type="button" class="item-fix-btn" onclick="itemFix(this, ${
            result.data[i].id
          })">상품 수정</button>
          <button type="button" class="item-cancel-btn" onclick="itemDelete(this, ${
            result.data[i].id
          })">상품 삭제</button>
        </div>
      </div>
    `);
  }
});

function imgname() {
  var imgname = document.querySelector("#img").files[0].name;
  var uploadName = document.querySelector(".upload-name");
  uploadName.value = imgname;
}

// var img_files = [];
// $(document).ready(function () {
//   $("#img").on("change", handleImgFilesSelect);
// });

// function imgname() {
//   console.log("imgname");

// }

///상품 수정////
function itemFix(obj) {
  axios({
    url: "/api/product/myproduct",
    method: "post",
    data: { id: sessionStorage.getItem("id") },
  }).then((result) => {
    var itemList = document.querySelector(".itemList");
    var parent1 = $(obj).parent("div"); /*item-cancel*/
    var parent2 = $(parent1).siblings("a"); /*pagelink*/
    var child1 = $(parent2).children("div"); /*div*/
    var child2 = $(child1).children("img"); /*item-img*/
    var child3 = $(child1).children("div"); /*item-info*/
    var child4 = $(child3).children("div"); /*item-text*/
    var child5 = $(child4).children("h4"); /*item-text-name */
    var child6 = $(child4).children("div"); /*item-text-category*/
    fixItem();
    console.log(child2[0].currentSrc);
    document.querySelector(".addTitle").innerHTML = "상품 수정";
    document.querySelector(".title").value = child5[0].innerHTML;
    document.querySelector(".price").value = child6[2].innerHTML;
    document.querySelector(".content").value = child6[1].innerHTML;
    document.querySelector(".select").value = child6[0].innerHTML;
    document.querySelector(".upload-name").value = child2[0].currentSrc;

    document.querySelector(".addItemBtn").classList.add("d-none");
    document.querySelector(".addFixBtn").classList.remove("d-none");
  });
}

function modalFixItem() {
  const form = document.querySelector(".myModal");
  const category = document.querySelector(".category");
  const formData = new FormData();
  const file = document.querySelector(".img");

  formData.append("user_id", sessionStorage.getItem("id"));
  formData.append("category_id", category.value);
  formData.append("title", form.title.value);
  formData.append("img", file.files);
  formData.append("adult", true);
  formData.append("price", form.price.value);
  formData.append("position", "마포구");
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
      var itemList = document.querySelector(".itemList");
      let img_list = response.data.img.split("..");
      const price = response.data.price;
      const comma = price
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

      $(itemList).append(`
<<<<<<< HEAD
      <div class="my-item">
      <a class="pagelink" href="/product/${response.data.id}">
      <div>
        <img class="item-img" src="${response.data.img}">
        <div class="item-info">
          <div class="item-text">
            <h4 class="item-text-name">${response.data.title}</h4>
            <div class="item-text-price">${response.data.price}</div>
            <div class="item-text-category">${
              categories[response.data.category_id]
            }</div>
            <div class="item-text-content">${response.data.content}</div>
          </div>
        </div>
        </div>
        </a>
        <div class="item-cancel">
          <button type="button" class="item-cancel-btn" onclick="itemDelete(this, ${
            response.data.id
          })">상품 삭제</button>
        </div>
        </div>
=======
        <div class="my-item">
          <a class="pagelink" href="/product/${response.data.id}">
            <div>
              <img class="item-img" src="${img_list[0]}">
              <div class="item-info">
                <div class="item-text">
                  <h4 class="item-text-name">${response.data.title}</h4>
                  <div class="item-text-category">${
                    categories[response.data.category_id]
                  }</div>
                  <div class="item-text-content">${response.data.content}</div>
                  <div class="item-text-price">${comma}원</div>
                </div>
              </div>
            </div>
          </a>
          <div class="item-cancel">
            <button type="button" class="item-fix-btn" onclick="itemFix(this, ${
              response.data.id
            })">상품 수정</button>
            <button type="button" class="item-cancel-btn" onclick="itemDelete(this, ${
              response.data.id
            })">상품 삭제</button>
          </div>
        </div>
>>>>>>> upstream/feature
      `);
      modalClose();
    } else {
      alert("상품 등록 실패");
    }
  });
}

function mypage() {
  window.location.href = "/mypage";
}

<<<<<<< HEAD
axios({
  url: "/api/product/myproduct",
  method: "post",
  data: { id: "yagobo1110" },
}).then((result) => {
  // console.log(result);
  var i;
  for (i = 0; i < result.data.length; i++) {
    var itemList = document.querySelector(".itemList");
    $(itemList).append(`
    <div class="my-item">
    <a class="pagelink" href="/product/${result.data[i].id}">
    <div >
    <img class="item-img" src="${result.data[i].img}">
      <div class="item-info">
        <div class="item-text">
          <h4 class="item-text-name">${result.data[i].title}</h4>
          <div class="item-text-price">${result.data[i].price}</div>
          <div class="item-text-category">${
            categories[result.data[i].category_id]
          }</div>
          <div class="item-text-content">${result.data[i].content}</div>
        </div>
      </div>
      </div>
      </a>
      <div class="item-cancel">
        <button type="button" class="item-cancel-btn" onclick="itemDelete(this, ${
          result.data[i].id
        })">상품 삭제</button>
      </div>
      </div>
    `);
  }
});

function imgname() {
  var imgname = document.querySelector("#img").files[0].name;
  var uploadName = document.querySelector(".upload-name");
  console.log(imgname);
  console.log(uploadName.value);
  uploadName.value = imgname;
}

function pageAlgo(total, bottomSize, listSize, cursor) {
  //total = 총 갯수
  //bottomSize = 하단크기
  //listSize = 화면에서 보여줄 크기
  //cursor = 현재 나의 페이지

  let totalPageSize = Math.ceil(total / listSize); //한 화면에 보여줄 갯수에서 구한 하단 총 갯수

  let firstBottomNumber = cursor - (cursor % bottomSize) + 1; //하단 최초 숫자
  let lastBottomNumber = cursor - (cursor % bottomSize) + bottomSize; //하단 마지막 숫자

  if (lastBottomNumber > totalPageSize) lastBottomNumber = totalPageSize; //총 갯수보다 큰 경우 방지

  return {
    firstBottomNumber,
    lastBottomNumber,
    totalPageSize,
    total,
    bottomSize,
    listSize,
    cursor,
  };
}

//280개의 데이터, 하단에는 20개씩, 1개화면에는 10개, 지금 나의페이지는 21
let info = pageAlgo(280, 20, 10, 21);

//실제 출력하는 방법 샘플
for (let i = info.firstBottomNumber; i <= info.lastBottomNumber; i++) {
  i == info.cursor
    ? console.log(`<span>cur : ${i}</span>`)
    : console.log(`<span>${i}</span>`);
=======
function mypick() {
  window.location.href = "/mypick";
}

function myfix() {
  window.location.href = "/myfix";
>>>>>>> upstream/feature
}

const openModal = document.querySelector(".withDraw");
const modalOn = document.querySelector(".modal2");
const closeBtn = document.querySelector(".no");
const modalBgr = document.querySelector(".modal-bgr");

function displayModal() {
  modalOn.classList.toggle("hidden");
}

openModal.addEventListener("click", displayModal);
closeBtn.addEventListener("click", displayModal);
modalBgr.addEventListener("click", displayModal);
