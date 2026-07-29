const User = require("../models/user.model");

const registerUser = async (userData) => {

    const user = await User.create(userData);

    return user;
}

module.exports = {
    registerUser,
};