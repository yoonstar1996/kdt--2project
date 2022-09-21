const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// 포트설정 (3000 8080도 가능)
const port = 8000;


// ex - ip:8000/
app.get("/", (req, res) => {
    res.render("index");
})

app.use(express.static('static'));

// 서버 오픈 명령어
app.listen(port, () => {
    console.log("server open:", port);
})

app.get("/login", (req, res) => {
    res.render("login");
})

app.get("/main", (req, res) => {
    res.render("main");
})
