const { Product } = require("../model");

exports.main = (req, res) => {
  Product.findAll().then((result) => {
    const data = result;
    res.render("index", { data: data });
  });
};
// 네이버 로그인 콜백 페이지
exports.naverCallback = (req, res) => {
  res.render("./login/naver_callback");
};
// 카카오 로그인 콜백 페이지
exports.kakaoCallback = (req, res) => {
  var data = {
    email: req.body.email,
  };
  res.render("./login/kakao_callback", { email: req.body.email });
};

exports.mypage = (req, res) => {
  const data = [];

  let result = true;
  res.render("./login/mypageItem", { data: result });
};
