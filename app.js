const express = require("express");
const app = express();
const port = 8000;

const http = require("http").Server(app);
const io = require("socket.io")(http);

app.set("view engine", "ejs");

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

app.use(express.static("static"));

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/main", (req, res) => {
  res.render("main");
});


// 다른페이지 연결시 추가 (여러개사용 X)
app.get("/socket",(req, res)=> {
    res.render("socket");
})


// 서버 오픈 명령어
app.listen(port, () => {
  console.log("server open:", port);
});
