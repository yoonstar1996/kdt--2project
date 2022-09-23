const express = require("express");
const app = express();
const port = 8000;

const http = require("http").Server(app);
const io = require("socket.io")(http);
const moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

app.set("view engine", "ejs");
app.use(express.static("apidoc"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require("./routes");
app.use("/", router);

// 소켓 채팅 시작!

var client_list = {};
// {소켓아이디 : 닉네임, 소켓아이디 : 닉네임 , .....}

io.on("connection", function (socket) {
  //연결이 들어오면 실행되는 이벤트

  // 입장 메시지 시작!

  socket.on("showchat", (ibjangmsg) => {
    console.log(ibjangmsg, "님이 입장했습니다.");
    console.log("Server Socket Connected", `${socket.id}`);
    io.emit("showchat", `${ibjangmsg.ibjangmsg}님이 입장하셨습니다.`);
    io.emit("notice", ibjangmsg);
  });

  // 입장 메시지 끝!
});

// 소켓 채팅 끝!

// 서버 오픈 명령어
http.listen(port, () => {
  console.log("server open:", port);
});
