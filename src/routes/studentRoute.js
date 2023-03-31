const express = require("express");
const studentControllers = require("../controllers/studentControllers");
const isStudent = require("../middlewares/isStudent");
require("dotenv").config();

const router = express.Router();

router.post("/apply", isStudent,  studentControllers.applyController);

module.exports = router;
