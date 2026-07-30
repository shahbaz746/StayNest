const bcrypt = require("bcryptjs");
const User = require("../models/user.model");

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

module.exports = {
  registerUser,
};