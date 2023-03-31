const express = require("express");
const teacherControllers = require("../controllers/teacherControllers");
const router = express.Router();
const isTeacher = require('../middlewares/isTeacher')


router.post("/getAllProjects" ,isTeacher , teacherControllers.teacherProjectController);

router.post("/addProject", isTeacher ,teacherControllers.addProjectController);

router.post("/deleteProject", isTeacher,teacherControllers.deleteProjectController);

router.post(
  "/reviewApplication",
  isTeacher,
  teacherControllers.reviewApplicationController
);



module.exports = router;
