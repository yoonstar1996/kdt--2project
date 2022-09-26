const { Product } = require("../model");
const multer = require("multer");
const path = require("path");

const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.product = (req, res) => {
  res.render("product/product");
};

exports.categories = (req, res) => {
  res.render("product/categories");
};

// 상품 생성
exports.product_create = (req, res) => {
  const data = {
    user_id: req.body.user_id,
    title: req.body.title,
    img: req.body.img,
    adult: req.body.adult,
    price: req.body.price,
    position: req.body.position,
    category: req.body.category,
    content: req.body.content,
  };
  Product.create(data).then((result) => {
    res.send(true);
  });
};
