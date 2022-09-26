exports.main = (req, res) => {
  res.render("index");
};
// 네이버 로그인 콜백 페이지
exports.naverCallback = (req, res) => {
  res.render("./login/naver_callback");
};
// 카카오 로그인 콜백 페이지
exports.kakaoCallback = (req, res) => {
  res.render("./login/kakao_callback");
};

exports.mypage = (req, res) => {
  const data = [];

  let result = true;
  res.render("./login/mypageItem",{data: result});
};
