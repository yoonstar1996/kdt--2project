// const {
//   User,
//   Product,
//   ProductLikeUsers,
//   Room,
//   ChatContent,
//   Participation,
// } = require("../model");

const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.main = (req, res) => {
  res.render("index");
};
