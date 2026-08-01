const bcrypt = require("bcryptjs");
const User = require("../models/user.model");


// Register function to create a new user

const registerUser = async (userData) => {
  const existingEmail = await User.findOne({
    email: userData.email,
  });

  if (existingEmail) {
    throw new Error("Email already exists.");
  }

  const existingPhone = await User.findOne({
    phone: userData.phone,
  });

  if (existingPhone) {
    throw new Error("Phone number already exists.");
  }

  const hashedPassword = await bcrypt.hash(
    userData.password,
    10
  );

  const user = await User.create({
    ...userData,
    password: hashedPassword,
  });

  return user;
};

// Login function to authenticate user

const loginUser = async (loginData) => {

  const { identifier, password } = loginData;

const isEmail = identifier.includes("@");

const user = isEmail
  ? await User.findOne({ email: identifier })
  : await User.findOne({ phone: identifier });

if (!user) {
  throw new Error("Invalid email/phone or password.");
}

if (user.isBlocked) {
  throw new Error("Your account has been blocked. Please contact support.");
}

const isPasswordMatch = await bcrypt.compare(
  password,
  user.password
);

if (!isPasswordMatch) {
  throw new Error("Invalid email/phone or password.");
}

return user;
};

module.exports = {
  registerUser,
};