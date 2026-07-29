const express = require("express");

const router = express.Router();

const { resgisterUser} = require("../controllers/auth.controller");

router.post("/register", register);

module.exports = router;