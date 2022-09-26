const express = require("express");
const main = require("../controller/Cindex");
const socket = require("../controller/CSocket");
const uesr = require("../controller/CUser");
const product = require("../controller/CProduct");
const multer = require("multer");
const path = require("path");
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

// 상세 상품
router.get("/product/:id", product.product);

// 카테고리
router.get("/product/:id", product.product);

// 소캣
router.get("/socket", socket.socket);

router.get("/mypage", main.mypage);

module.exports = router;
