const express = require("express");
const generalControllers = require("../controllers/generalControllers");
const notStudent = require("../middlewares/notStudent");

const router = express.Router();

router.get("/getAllProjects", generalControllers.getAllProjectsController);
router.get("/getRegistrationStatus", generalControllers.getRegistrationStatus);
router.post(
  "/getAllResponse",
  notStudent,
  generalControllers.getAllResponseController
);
router.get("/getReport", generalControllers.getReport);
module.exports = router;
