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


//// 찜 목록 불러오기 ////
axios({
  url: "/api/product/myproduct",
  method: "post",
  data: { id: sessionStorage.getItem("id") },
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
});

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
widthDrawBtn.addEventListener("click", widthDraw);

axios({
  url: "api/likes",
  method: "post",
  data: {
    user_id: sessionStorage.getItem("id"),
  },
}).then((result) => {
  console.log(result.data);
});
