const express = require("express");
const main = require("../controller/Cindex");
const socket = require("../controller/CSocket");
const uesr = require("../controller/CUser");
const product = require("../controller/CProduct");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      //   done(null, req.body.id + ext);
      done(null, file.originalname);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.get("/", main.main);

// 로그인 페이지
router.get("/login", uesr.login);
// 네이버 로그인 콜백
router.get("/naver_callback", main.naverCallback);

// 카카오 로그인 콜백
router.get("/kakao_callback", main.kakaoCallback);

// 회원가입 페이지
router.get("/signup", uesr.signup);

// 상품 생성
router.get("/product", upload.single("userfile"), product.product);
// 소캣
router.get("/socket", socket.socket);

router.get("/mypage", main.mypage);

module.exports = router;
