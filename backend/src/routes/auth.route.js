const express = require("express");

const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

const {
  register,
  login,
  getProfile,
  logout,
  updateProfile,
  changePassword,
} = require("../controllers/auth.controller");

// ==============================
// Auth Routes
// ==============================

// Register
router.post("/register", register);

// Login
router.post("/login", login);

// Get Profile
router.get("/profile", authMiddleware, getProfile);

// Logout
router.post("/logout", authMiddleware, logout);

// Update Profile
router.patch("/profile", authMiddleware, updateProfile);

// Change Password
router.patch(
  "/change-password",
  authMiddleware,
  changePassword
);

module.exports = router;