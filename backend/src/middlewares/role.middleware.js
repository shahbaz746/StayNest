const roleMiddleware = require("../middlewares/role.middleware");

router.post(
  "/properties",
  authMiddleware,
  roleMiddleware("owner"),
  createProperty
);


const roleMiddleware = (requiredRole) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized. Please login first.",
      });
    }

    if (req.user.role !== requiredRole) {
      return res.status(403).json({
        success: false,
        message: "Access denied. You do not have permission.",
      });
    }

    next();
  };
};

module.exports = roleMiddleware;