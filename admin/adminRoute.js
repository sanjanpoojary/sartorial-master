const express = require("express");
const { login } = require("./adminContoller");

const router = express.Router();

router.post("/admin", login);

module.exports = router;
