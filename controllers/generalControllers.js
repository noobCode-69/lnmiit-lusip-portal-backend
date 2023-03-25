
const Projects = require("../models/Project")

const Response = require("../models/Response")


const getAllProjectsController = async (req, res, next) => {
  try {
    let projects = await Projects.find({})
    res.send({projects})
  } catch (err) {
    console.log(err.message);
    res.status(500).send("error fetching data");
  }
};

const getAllResponseController = async (req, res, next) => {
  try {
    const {projectId} = req.body;
    let response = await Response.find({projectId}).populate('studentId');
    res.send({response})
  } catch (err) {
    console.log(err.message);
    res.status(500).send("error fetching data");
  }
};

module.exports = {
  getAllProjectsController,
  getAllResponseController,
};
