function mypage() {
  window.location.href = "/mypage";
}

function mypick() {
  window.location.href = "/mypick";
}

function myfix() {
  window.location.href = "/myfix";
}
function goToFix() {
  var div = document.querySelector("right-sgt-content");
  const id_input = document.getElementById("id").value;
  const pw_input = document.getElementById("pw").value;
  var data = {
    id: id_input,
    pw: pw_input,
  };

  axios({
    url: "/api/login",
    method: "post",
    data: data,
  }).then((response) => {
    if (response.data.success) {
      window.location.href = "/infofix";
    } else {
      alert(response.data.errormessage);
    }
  });
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

var idinput = document.querySelector(".id");
idinput.value = sessionStorage.getItem("id");

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
