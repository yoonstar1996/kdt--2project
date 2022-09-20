const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 포트설정 (3000 8080도 가능)
const port = 8000;

// ex - ip:8000/
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/find_id", (req, res) => {
  res.render("find_id");
});

app.get("/find_pw", (req, res) => {
  res.render("find_pw");
});

// 서버 오픈 명령어
app.listen(port, () => {
  console.log("server open:", port);
});
