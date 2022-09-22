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

// 서버 오픈 명령어
app.listen(port, () => {
  console.log("server open:", port);
});
