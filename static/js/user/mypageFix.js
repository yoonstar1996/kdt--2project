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

axios({
  url: "/api/product/myproduct",
  method: "post",
  data: { id: sessionStorage.getItem("id") },
}).then((result) => {
  var idinput = document.querySelector(".id");
  idinput.value = result.data[0].user_id;
});

// axios({
//   url: "/api/login",
//   method: "post",
//   data: data,
// }).then((response) => {
//   console.log(response);
// });
