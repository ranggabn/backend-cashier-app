var express = require("express");
var auth = require("./auth");
var router = express.Router();

router.post("/api/v1/register", auth.reqistrasi);
router.post("/api/v1/login", auth.login);
router.post("/api/v1/loginAdmin", auth.loginAdmin);

module.exports = router;
