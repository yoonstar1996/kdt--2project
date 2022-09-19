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

http.listen(port, () => {
  console.log("Server Port : ", port);
});
