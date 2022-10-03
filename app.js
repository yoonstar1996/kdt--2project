const express = require("express");
const app = express();
const port = 8000;
const cookieParser = require("cookie-parser");
const http = require("http").Server(app);
const io = require("socket.io")(http);
const moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

app.use(cookieParser());
app.set("view engine", "ejs");
app.use(express.static("apidoc"));
app.use("/static", express.static(__dirname + "/static"));
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// redirect JS jQuery
app.use("/jq", express.static(__dirname + "/node_modules/jquery/dist"));
// redirect JS jQuery
app.use("/jqui", express.static(__dirname + "/node_modules/jquery-ui/dist"));
// redirect bootstrap JS
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
// redirect CSS bootstrap
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
// redirect axios
app.use("/axios", express.static(__dirname + "/node_modules/axios/dist"));
// slick
app.use(
  "/slick",
  express.static(__dirname + "/node_modules/slick-carousel/slick")
);

const router = require("./routes");
app.use("/", router);
const api_router = require("./routes/api");
app.use("/api", api_router);

const users = {};
io.on("connection", (socket) => {
  socket.on("create", (msg) => {
    socket.join(msg);
  });

  socket.on("chat message", (data) => {
    socket.broadcast.to(data.room_id).emit("chat message", {
      msg: data.msg,
    });
    io.to(data.room_id).emit("db message", {
      msg: data.msg,
    });
  });

  socket.on("disconnect", () => {
    io.emit("notice", `${users[socket.id]}님이 퇴장하셨습니다.`);
    delete users[socket.id];
    io.emit("users", users);
  });
});

// 서버 오픈 명령어
http.listen(port, () => {
  console.log("server open:", port);
});
