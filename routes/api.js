const express = require("express");
const main = require("../controller/Cindex");
const socket = require("../controller/CSocket");
const uesr = require("../controller/CUser");
const product = require("../controller/CProduct");

const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();

// 로그인 페이지
router.post("/login", uesr.login_check);
// 유저 생성
router.post("/signup", uesr.signup_create);
router.post("/signup/idcheck", uesr.signup_id_check);

// 상품 생성
router.post("/product", product.product_create);
// 소캣 룸 생성
router.post("/socket", socket.socket_create);

module.exports = router;
