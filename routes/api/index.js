const router = require("express").Router();
const userRoutes = require("./userRoutes");

// Post routes
router.use("/user", userRoutes);

module.exports = router;