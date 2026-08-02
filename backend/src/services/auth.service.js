const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// ==============================
// Register User
// ==============================

const registerUser = async (userData) => {
  // Check Email
  const existingEmail = await User.findOne({
    email: userData.email,
  });

  if (existingEmail) {
    throw new Error("Email already exists.");
  }

  // Check Phone
  const existingPhone = await User.findOne({
    phone: userData.phone,
  });

  if (existingPhone) {
    throw new Error("Phone number already exists.");
  }

  // Hash Password
  const hashedPassword = await bcrypt.hash(
    userData.password,
    10
  );

  // Create User
  const user = await User.create({
    ...userData,
    password: hashedPassword,
  });

  return user;
};

// ==============================
// Login User
// ==============================

const loginUser = async (loginData) => {

  // Destructure login data
  const { identifier, password } = loginData;

  // Remove extra spaces
  const cleanIdentifier = identifier.trim();

  // Check email or phone
  const isEmail = cleanIdentifier.includes("@");

  // Find user
  const user = isEmail
    ? await User.findOne({ email: cleanIdentifier })
    : await User.findOne({ phone: cleanIdentifier });

  // User not found
  if (!user) {
    throw new Error("Invalid email/phone or password.");
  }

  // Blocked account
  if (user.isBlocked) {
    throw new Error("Your account has been blocked. Please contact support.");
  }

  // Compare Password
  const isPasswordMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!isPasswordMatch) {
    throw new Error("Invalid email/phone or password.");
  }

  // Generate JWT
  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );

  // Return User + Token
  return {
    user,
    token,
  };
};

module.exports = {
  registerUser,
  loginUser,
};