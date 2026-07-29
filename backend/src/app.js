const express = require("express");
const authRoutes = require("./routes/auth.route");

const app = express();

// Middleware
app.use(express.json());

app.use("/api/auth", authRoutes);

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to StayNest API 🚀",
  });
});

module.exports = app;