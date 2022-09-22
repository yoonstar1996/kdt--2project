const express = require("express");
const app = express();
const port = 8000;

const http = require("http").Server(app);
const io = require("socket.io")(http);
const moment = require('moment');
require('moment-timezone'); 
moment.tz.setDefault("Asia/Seoul");

app.set("view engine", "ejs");
app.use(express.static("apidoc"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require("./routes");
app.use("/", router);



const users = {};
io.on("connection", (socket) => {});

// ex - ip:8000/
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/mypage", (req, res) => {
  const data = [
    
  ]
  res.render("./login/mypageItem", data);
});

app.use(express.static("static"));

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/main", (req, res) => {
  res.render("main");
});

app.get("/product", (req, res) => {
  res.render("product");
});

// 서버 오픈 명령어
app.listen(port, () => {
  console.log("server open:", port);
});
