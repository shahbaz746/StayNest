const {
  registerUser,
  loginUser,
  updateProfile: updateProfileService,
  changePassword: changePasswordService,
} = require("../services/auth.service.js");

// ==============================
// Register Controller
// ==============================

const register = async (req, res) => {
  try {
    const user = await registerUser(req.body);

    res.status(201).json({
      success: true,
      message: "User registered successfully.",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to register user.",
      error: error.message,
    });
  }
};

// ==============================
// Login Controller
// ==============================

const login = async (req, res) => {
  try {
    const { user, token } = await loginUser(req.body);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: "Login successful.",
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Get Profile Controller
// ==============================

const getProfile = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Logout Controller
// ==============================

const logout = async (req, res) => {
  try {
    res.clearCookie("token");

    res.status(200).json({
      success: true,
      message: "Logout successful.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Update Profile Controller
// ==============================

const updateProfile = async (req, res) => {
  try {
    const user = await updateProfileService(
      req.user._id,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Profile updated successfully.",
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Change Password Controller
// ==============================

const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Old password and new password are required.",
      });
    }

    await changePasswordService(
      req.user._id,
      oldPassword,
      newPassword
    );

    res.status(200).json({
      success: true,
      message: "Password changed successfully.",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Export Controllers
// ==============================

module.exports = {
  register,
  login,
  getProfile,
  logout,
  updateProfile,
  changePassword,
};