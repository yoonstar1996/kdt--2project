const { Product, Category } = require("../model");
exports.product = (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    const data = result;
    console.log(data);
    res.render("product/product", { data });
  });
};

exports.categories = (req, res) => {
  Product.findAll({
    where: {
      category_id: req.params.id,
    },
  }).then((result) => {
    const data = result;
    console.log(data);
    res.render("product/categories", { data });
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
