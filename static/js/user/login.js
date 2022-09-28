$(document).ready(function () {
  $(".id-input").focus();
});

function NormalLogin() {
  var form = document.querySelector("form");
  const id_input = document.getElementById("id").value;
  const pw_input = document.getElementById("pw").value;
  var data = {
    id: form.id.value,
    pw: form.pw.value,
  };

  axios({
    url: "/api/login",
    method: "post",
    data: data,
  }).then((response) => {
    if (response.data.success) {
      window.location.href = "/";
      sessionStorage.setItem("id", response.data.id);
    } else {
      alert(response.data.errormessage);
    }
  });
}

function Singup() {
  window.location.href = "http://localhost:8000/signup";
}
