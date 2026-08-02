const express = require("express");

const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

const { 
    register,
     login,
     getProfile,
    } = require("../controllers/auth.controller");

router.post("/register", register);

router.post("/login", login);

router.get("/profile", authMiddleware, getProfile);

module.exports = router;