const express = require("express");
const loginFunc = require("./login");
const router = express.Router();
router.post("/login", loginFunc);


module.exports=router;