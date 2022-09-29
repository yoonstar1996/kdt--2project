const express = require("express");
const main = require("../controller/Cindex");
const socket = require("../controller/CSocket");
const uesr = require("../controller/CUser");
const product = require("../controller/CProduct");
const verifyToken = require("./middlewares");
const router = express.Router();

router.get("/", main.main);

// 로그인 페이지
router.get("/login", uesr.login);
// 네이버 로그인 콜백
router.get("/naver_callback", main.naverCallback);
// 카카오 로그인 콜백
router.post("/kakao_callback", main.kakaoCallback);

// 회원가입 페이지
router.get("/signup", uesr.signup);

// 상품 생성
router.get("/product/:id", product.product);
// 카테고리별 상품
router.get("/categories/:id", product.categories);
router.get("/search/:product", product.product_search);

// 소캣
router.get("/roomlist", socket.roomlist);
router.get("/socket/:id", socket.socket);
// router.get("/socket", verifyToken, socket.socket);

router.get("/mypage", main.mypage);

router.get("/mypick", main.mypick);

module.exports = router;
