const express = require("express");
const teacherControllers = require("../controllers/teacherControllers");
require("dotenv").config();

const router = express.Router();


router.post("/getAllProjects" ,  teacherControllers.teacherProjectController);

router.post("/addProject", teacherControllers.addProjectController);

router.post("/deleteProject", teacherControllers.deleteProjectController);

router.post(
  "/reviewApplication",
  teacherControllers.reviewApplicationController
);

module.exports = router;
