const { Product } = require("../model");
const multer = require("multer");
const path = require("path");

const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.product = (req, res) => {
  res.render("product/product");
};

// 상품 생성
exports.product_create = (req, res) => {

  console.log("aaa");
  const data = {
    user_id: req.body.user_id,
    category_id: req.body.category,
    title: req.body.title,
    img: "/uploads" + req.body.img,
    adult: req.body.adult,
    price: req.body.price,
    position: req.body.position,
    content: req.body.content,
  };
  Product.create(data).then((result) => {
    res.send(result);
  });
};
