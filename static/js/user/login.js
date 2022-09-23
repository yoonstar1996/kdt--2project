
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
      if (response.data) {
        window.location.href = "/main";
      } else {
        alert("로그인 실패");
      }

      /*
      if (id_input == "" || pw_input == "") {
      alert("아이디 또는 비밀번호를 입력해주세요.");
    } else {
      window.location = "/";
    }
    */
    });
  }

  function Singup() {
    // console.log("회원가입 페이지로 이동");
    window.location.href = "http://localhost:8000/signup";
  }

  /*
  window.Kakao.init("6bdae09f2a7d64b16126787989a4ae52");
  function KakaoLogin() {
    //카카오 로그인 버튼 구현
    window.Kakao.Auth.login({
      scope: "	profile_nickname, account_email, gender",
      success: function (authObj) {
        // console.log(authObj);
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: (res) => {
            const kakao_account = res.kakao_account;
            // console.log(kakao_account);
            console.log(kakao_account.email);
            console.log(kakao_account.profile.nickname);
            // window.location.href= "http://localhost:8000/kakao_callback"
          },
        });
      },
    });
  }
  */