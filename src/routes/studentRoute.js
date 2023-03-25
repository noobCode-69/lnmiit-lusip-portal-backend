const express = require("express");
const studentControllers = require("../controllers/studentControllers");
require("dotenv").config();

const router = express.Router();

router.post("/apply", studentControllers.applyController);

module.exports = router;
