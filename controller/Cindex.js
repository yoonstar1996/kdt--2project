const { User } = require("../model");
const { Product } = require("../model");
const { ProductLikeUsers } = require("../model");
const { Room } = require("../model");
const { ChatContent } = require("../model");
const { Participation } = require("../model");
exports.main = (req, res) => {
  res.render("main");
};
// 로그인 페이지
exports.login = (req, res) => {
  res.render("./login/login");
};
// 로그인 검사
exports.login_check = (req, res) => {
  User.findOne({
    where: {
      id: req.body.id,
      pw: req.body.pw,
    },
  }).then((result) => {
    if (result) res.send(true);
    else res.send(false);
  });
};
// 네이버 로그인 콜백 페이지
exports.naverCallback = (req, res) => {
  res.render("./login/naver_callback");
};
// 카카오 로그인 콜백 페이지
exports.kakaoCallback = (req, res) => {
  res.render("./login/kakao_callback");
};
// 회원가입 페이지
exports.signup = (req, res) => {
  res.render("./signup/signup");
};

// 회원가입 아이디 중복 검사
exports.signup_id_check = (req, res) => {
  User.findOne({
    where: {
      id: req.body.id,
    },
  }).then((result) => {
    if (result) res.send(true);
    else res.send(false);
  });
};

// 유저 생성
exports.signup_create = (req, res) => {
  const data = {
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
    email: req.body.email,
    position: req.body.position,
  };
  User.create(data).then((result) => {
    res.send(true);
  });
};

// 상품 생성
exports.product_create = (req, res) => {
  const data = {
    user_id: req.body.user_id,
    title: req.body.title,
    img: req.body.img,
    adult: req.body.adult,
    price: req.body.price,
    position: req.body.position,
    category: req.body.category,
    content: req.body.content,
  };
  Product.create(data).then((result) => {
    res.send(true);
  });
};

// 채팅 페이지
exports.socket = (req, res) => {
  res.render("./socket");
};

// 채팅 방 만들기
exports.socket_create = (req, res) => {
  const data = {
    name: req.body.name,
  };
  Room.create(data).then((result) => {
    console.log(result);
    const chat_data = {
      room_id: result.id,
      content: "",
    };
    ChatContent.create(chat_data).then((result) => {});
    const participation_my_data = {
      user_id: req.body.user_id,
      room_id: result.id,
    };
    const participation_other_data = {
      user_id: req.body.other_id,
      room_id: result.id,
    };
    Participation.create(participation_my_data).then((result) => {});
    Participation.create(participation_other_data).then((result) => {});
    res.send(true);
  });
};
