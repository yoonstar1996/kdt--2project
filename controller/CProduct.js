const { Product } = require("../model");

exports.product = (req, res) => {
  res.render("product/product");
};

// 상품 생성
exports.product_create = (req, res) => {

  console.log("aaa");
  const data = {
    user_id: req.body.user_id,
    title: req.body.title,
    img: "/uploads" + req.body.img,
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
