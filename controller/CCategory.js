const { Category } = require("../model");

exports.category = (req, res) => {
  Category.findOne({
    id: req.query,
  }).then((result) => {
    const data = result;
    console.log("data", data);
    res.render("product/product", { data });
  });
};

// 상품 생성
exports.product_create = (req, res) => {
  const data = {
    user_id: req.body.user_id,
    category_id: req.body.category_id,
    title: req.body.title,
    img: "/uploads/" + req.file.filename,
    adult: req.body.adult,
    price: req.body.price,
    position: req.body.position,
    content: req.body.content,
  };
  Product.create(data).then((result) => {
    res.send(result);
  });
};
