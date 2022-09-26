const express = require("express");
const main = require("../controller/Cindex");
const socket = require("../controller/CSocket");
const uesr = require("../controller/CUser");
const product = require("../controller/CProduct");
const router = express.Router();

router.get("/", main.main);

// 로그인 페이지
router.get("/login", uesr.login);
// 네이버 로그인 콜백
router.get("/callback", uesr.callback);
// 회원가입 페이지
router.get("/signup", uesr.signup);

// 상품 생성
router.get("/product", product.product);
// 카테고리별 상품
router.get("/categories", product.categories);

// 소캣
router.get("/socket", socket.socket);

module.exports = router;
