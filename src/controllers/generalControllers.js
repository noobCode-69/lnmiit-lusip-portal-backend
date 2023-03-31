
const Projects = require("../models/Project")
const Response = require("../models/Response")
const Teacher = require("../models/Teacher")



const getAllProjectsController = async (req, res, next) => {
  try {
    let projects = await Projects.find({}).populate("teacherId").lean();
    console.log({projects})
    projects = projects.map(projects => {
      return {
        ...projects,
        teacherDetails: projects.teacherId,
        teacherId: undefined
      };
    });
    res.send({projects})
  } catch (err) {
    res.status(500).send({message : "Error Fetching Data..."});
  }
};



const getAllResponseController = async (req, res, next) => {
  const {projectId} = req.body;
  try {
    let responses = await Response.find({projectId}).populate("studentId").lean();
    responses = responses.map(response => {
      return {
        ...response,
        studentDetails: response.studentId,
        studentId: undefined
      };
    });
    res.send({responses})
  } catch (err) {
    res.status(500).send("Error fetching data...");
  }
};

module.exports = {
  getAllProjectsController,
  getAllResponseController,
};

