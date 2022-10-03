const categories = {
  life: "생활/가전",
  electro: "전자제품",
  fashion: "패션/의류",
  interior: "가구/인테리어",
  book: "도서/음반/티켓",
  food: "식품/잡화",
  pet: "반려동물",
};

function mypage() {
  window.location.href = "/mypage";
}

function mypick() {
  window.location.href = "/mypick";
}

function myfix() {
  window.location.href = "/myfix";
}
function withDraw() {
  const id = sessionStorage.getItem("id");
  axios({
    url: "/api/user/delete",
    method: "delete",
    data: {
      id: sessionStorage.getItem("id"),
    },
  }).then((response) => {
    sessionStorage.clear();
    window.location.href = "/";
  });
}

function likeDelete(obj, product_id) {
  axios({
    url: "/api/like_delete",
    method: "delete",
    data: { user_id: sessionStorage.getItem("id"), product_id: product_id },
  }).then((result) => {
    var parent1 = $(obj).parent("div"); /*item-cancel*/
    var parent2 = $(parent1).siblings("a"); /*pagelink*/
    var parent3 = $(parent2).parent("div"); /*my-item*/
    $(parent3).remove();
    var pickList = document.querySelector(".pickList");

    if (pickList.children.length == 0) {
      window.location.href = "/mypick";
    }
  });
}

const openModal = document.querySelector(".withDraw");
const modalOn = document.querySelector(".modal2");
const widthDrawBtn = document.querySelector(".yes");
const closeBtn = document.querySelector(".no");
const modalBgr = document.querySelector(".modal-bgr");

function displayModal() {
  modalOn.classList.toggle("hidden");
}

openModal.addEventListener("click", displayModal);
closeBtn.addEventListener("click", displayModal);
widthDrawBtn.addEventListener("click", withDraw);

//// 찜 목록 불러오기 ////
axios({
  url: "api/likes",
  method: "post",
  data: {
    user_id: sessionStorage.getItem("id"),
  },
}).then((result) => {
  const List = document.querySelector(".no-item");
  const NoList = document.querySelector(".pickList");
  const addBtn = document.querySelector("#noModalOn");
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
    var pickList = document.querySelector(".pickList");
    const price = result.data[i].product.price;
    let img_list = result.data[i].product.img.split("..");
    const comma = price
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

    $(pickList).append(`
      <div class="my-item">
        <a class="pagelink" href="/product/${result.data[i].product.id}">
          <div>
            <div class="item_id_${result.data[i].product.id} d-none">${
      result.data[i].product.id
    }</div>
            <img class="item-img" src="${img_list[0]}">
            <div class="item-info">
              <div class="item-text">
                <h4 class="item-text-name">${result.data[i].product.title}</h4>
                <div class="item-text-category">${
                  categories[result.data[i].product.category_id]
                }</div>
                <div class="item-text-content">${
                  result.data[i].product.content
                }</div>
              <div class="item-text-price">${comma}원</div>
            </div>
            </div>
          </div>
        </a>
        <div class="item-cancel">
          <button type="button" class="item-cancel-btn" onclick="likeDelete(this, ${
            result.data[i].product.id
          })">찜 삭제</button>
        </div>
      </div>
    `);
  }
});
