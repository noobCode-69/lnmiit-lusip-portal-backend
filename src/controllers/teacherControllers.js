const Project = require("../models/Project")
const Response = require("../models/Response")


const teacherProjectController = async (req,res,next) => {
  const {teacherId} = req.body;
  try {
    let projects = await Project.find({teacherId : teacherId});
    res.send({projects : projects })
  } catch (error) {
    res.status(500).json({
      message: "Error Fetching Data.",
    });
  }
}


const addProjectController = async (req, res, next) => {
  const { name, description , teacherId , modeOfExecution , validYear, validBranch , prerequists  } = req.body;
  try {
    let project = await Project.findOne({
      name,
      teacherId
    });
    if(project) {
      return res.status(400).json({
        message : "Project already exist"
      })
    }
    project = new Project({
      name, description , teacherId, modeOfExecution , validYear , validBranch , prerequists
    });
    let projectData = await project.save();
    res.send({message : "Project saved successfully"})
  } catch (e) {
    res.status(500).json({
      message: "Error saving project",
    });
  }
};

const deleteProjectController = async (req, res, next) => {
  const {  projectId} = req.body;
  try {
    let project = await Project.findById(projectId);
    if(!project) {
      return res.status(500).json({
        message : "Project does not  exist"
      })
    }
    await project.deleteOne();
    await Response.deleteMany({projectId : projectId});
    res.send({message : "Project deleted Successfully"})
  } catch (e) {
    res.status(500).json({
      message: "error deleting project",
    });
  }
};

const reviewApplicationController = async (req, res, next) => {
  const { responseId  } = req.body;
  try {
    let response  = await Response.findById(responseId);
    if(!response) {
      return res.status(500).json({
        message : "Response does not exit"
      })
    }
    response.responseStatus = !response.responseStatus
    await response.save();
    res.send({message : "Response updated successfully"})
  } catch (e) {
    res.status(500).json({
      message: "Error updating project",
    });
  }
};

module.exports = {
  addProjectController,
  deleteProjectController,
  reviewApplicationController,
  teacherProjectController
};
