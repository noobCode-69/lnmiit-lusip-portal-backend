const express = require("express");
const generalControllers = require("../controllers/generalControllers");
const notStudent = require('../middlewares/notStudent')

const router = express.Router();

router.get("/getAllProjects", generalControllers.getAllProjectsController);

router.post("/getAllResponse", notStudent ,generalControllers.getAllResponseController);

module.exports = router;
