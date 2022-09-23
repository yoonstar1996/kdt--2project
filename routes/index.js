const express = require("express");
const index = require("../controller/Cindex");
const router = express.Router();

router.get("/", index.main);

// 로그인 페이지
router.get("/login", index.login);
router.post("/api/login", index.login_check);

// 네이버 로그인 콜백
router.get("/naver_callback", index.naverCallback);

// 카카오 로그인 콜백
router.get("/kakao_callback", index.kakaoCallback)

// 회원가입 페이지
router.get("/signup", index.signup);
// 유저 생성
router.post("/api/signup", index.signup_create);
router.post("/api/signup/idcheck", index.signup_id_check);

// 상품 생성
router.post("/api/product", index.product_create);

// 소캣
router.post("/socket", index.socket);
// 소캣 룸 생성
router.post("/api/socket", index.socket_create);

module.exports = router;
