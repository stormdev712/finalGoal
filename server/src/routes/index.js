const express = require("express");

//init Routes

const authRoutes = require("./authRoutes");
const adminRoutes = require("./adminRoutes");
// email routes //

//routes container
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/admin", adminRoutes);
// email routes con//

module.exports = router;
