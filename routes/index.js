const express = require("express");
const index = require("../controller/Cindex");
const router = express.Router();

router.get("/", index.main);

// 로그인 페이지
router.get("/login", index.login);

// 네이버 로그인 콜백
router.get("/callback", index.callback);

// 회원가입 페이지
router.get("/signup", index.signup);
// 유저 생성
router.post("/api/signup", index.signup_create);

// 상품 생성
router.post("/api/product", index.product_create);

module.exports = router;
