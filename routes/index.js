const express = require("express");
const user = require("../controller/Cindex");
const router = express.Router();

router.get("/", user.main);

module.exports = router;
