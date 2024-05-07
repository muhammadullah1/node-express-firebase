const express = require("express");
const router = express.Router();

// Routers
const studentRouter = require("./student");

router.use("/students", studentRouter);

module.exports = router;
