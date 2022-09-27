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

const router = require("./routes");
app.use("/", router);
const api_router = require("./routes/api");
app.use("/api", api_router);

const users = {};
io.on("connection", (socket) => {});

// 서버 오픈 명령어
http.listen(port, () => {
  console.log("server open:", port);
});
