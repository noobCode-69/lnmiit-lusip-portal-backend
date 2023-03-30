const express = require("express");
const generalControllers = require("../controllers/generalControllers");
require("dotenv").config();

const router = express.Router();

router.get("/getAllProjects", generalControllers.getAllProjectsController);

router.post("/getAllResponse", generalControllers.getAllResponseController);

module.exports = router;
