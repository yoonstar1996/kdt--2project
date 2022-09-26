const express = require("express");
const main = require("../controller/Cindex");
const socket = require("../controller/CSocket");
const uesr = require("../controller/CUser");
const product = require("../controller/CProduct");

const jwt = require("jsonwebtoken");
require("dotenv").config();

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
      const time = new Date();
      done(
        null,
        time.getFullYear() +
          "_" +
          time.getMonth() +
          "_" +
          time.getDate() +
          "_" +
          time.getHours() +
          "_" +
          time.getMinutes() +
          "_" +
          time.getSeconds() +
          "_" +
          time.getMilliseconds() +
          ext
      );
      // done(null, file.originalname);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

// 로그인 페이지
router.post("/login", uesr.login_check);
// 유저 생성
router.post("/signup", uesr.signup_create);
router.post("/signup/idcheck", uesr.signup_id_check);

// 상품 생성
router.post("/product", upload.single("img"), product.product_create);
router.post("/product/myproduct", product.product_myproduct);
// 소캣 룸 생성
router.post("/socket", socket.socket_create);

module.exports = router;
