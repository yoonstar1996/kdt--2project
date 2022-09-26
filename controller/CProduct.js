const { Product } = require("../model");

exports.product = (req, res) => {
  res.render("product/product");
};

// 상품 생성
exports.product_create = (req, res) => {
  console.log("aaa");
  const data = {
    user_id: req.body.user_id,
    category_id: req.body.category_id,
    title: req.body.title,
    img: "/uploads" + req.file.filename,
    adult: req.body.adult,
    price: req.body.price,
    position: req.body.position,
    content: req.body.content,
  };
  Product.create(data).then((result) => {
    res.send(result);
  });
};
