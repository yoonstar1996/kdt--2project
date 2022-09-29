const { User, Product, Category } = require("../model");
const { Op } = require("sequelize");
const sequelize = require("sequelize");

const categories = {
  life: "생활/가전",
  electro: "전자제품",
  fashion: "패션/의류",
  interior: "가구/인테리어",
  book: "도서/음반/티켓",
  food: "식품/잡화",
  pet: "반려동물",
};

exports.product = (req, res) => {
  Product.findOne({
    include: [{ model: User }],
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    const data = result;
    console.log(data);
    data.img = data.img.split("..")[0];
    data.category_id = categories[data.category_id];
    res.render("product/product", { data });
  });
};

exports.product_list = (req, res) => {
  Product.findAll({
    order: [["id", "DESC"]],
  }).then((result) => {
    res.send(result);
  });
};
exports.categories = (req, res) => {
  res.render("product/categories", { category: req.params.id });
};

exports.categories_list = (req, res) => {
  Product.findAll({
    where: {
      category_id: req.params.id,
    },
  }).then((result) => {
    console.log(result);
    res.send(result);
  });
};

// 상품 생성
exports.product_create = (req, res) => {
  let img_name = "";
  console.log(req.files);
  for (let i = 0; i < req.files.length; i++) {
    if (i != 0) img_name += "..";
    img_name += "/uploads/" + req.files[i].filename;
  }
  const data = {
    user_id: req.body.user_id,
    category_id: req.body.category_id,
    title: req.body.title,
    img: img_name,
    adult: req.body.adult,
    price: req.body.price,
    position: req.body.position,
    content: req.body.content,
  };
  Product.create(data).then((result) => {
    res.send(result);
  });
};

// 나의 등록 상품
exports.product_myproduct = (req, res) => {
  Product.findAll({
    where: { user_id: req.body.id },
  }).then((result) => {
    res.send(result);
  });
};

// 나의 등록 상품
exports.product_delete = (req, res) => {
  Product.destroy({
    where: { id: req.body.id },
  }).then(() => {
    res.send("true");
  });
};

// 나의 등록 상품
exports.product_search = (req, res) => {
  res.render("product/search", { search_item: req.params.product });
};

// 나의 등록 상품
exports.search_item = (req, res) => {
  Product.findAll({
    where: {
      title: {
        [Op.like]: "%" + req.body.search_item + "%",
      },
    },
  }).then((result) => {
    const data = result;
    res.send(data);
  });
};
