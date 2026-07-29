const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
     phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
     password: {
      type: String,
      required: true,
      minlength: 8,
    },
        role: {
      type: String,
      enum: ["student", "owner"],
      required: true,
    },
    isProfileCompleted: {
      type: Boolean,
      default: false,
    },
},
     {
    timestamps: true,
  }
)

const User = mongoose.model("User", userScheme);

module.exports = User;