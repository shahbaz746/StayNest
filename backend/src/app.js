// import required modules
const express = require("express");
const authRoutes = require("./routes/auth.route");
const cookieParser = require("cookie-parser");


// Initialize Express App
const app = express();

/* ============================
   Global Middlewares
============================ */
app.use(express.json());
app.use(cookieParser());

/* ============================
   Routes
============================ */
app.use("/api/v1/auth", authRoutes);

/* ============================
   Test Route
============================ */
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to StayNest API 🚀",
  });
});

module.exports = app;