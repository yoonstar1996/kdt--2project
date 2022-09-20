// const { User } = require("../model");

exports.main = (req, res) => {
  res.render("index");
};

exports.login = (req, res) => {
  res.render("login"); // 로그인 페이지
};

exports.callback = (req, res) => {
  res.render("naver_callback"); // 네이버 로그인 콜백 페이지
};

exports.signup = (req, res) => {
  res.render("signup"); // 회원가입 페이지
};
