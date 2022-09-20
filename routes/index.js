const express = require("express");
const user = require("../controller/Cindex");
const router = express.Router();

router.get("/", user.main);

router.get("/login", user.login); // 로그인 페이지

router.get("/callback", user.callback); // 네이버 로그인 콜백

router.get("/signup", user.signup); // 회원가입 페이지
router.post("/api/signup", user.signup_create); // 회원가입 페이지

module.exports = router;
