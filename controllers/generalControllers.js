
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
    let responses = await Response.find({projectId}).populate("studentId").lean();
    // console.log(responses)
    responses = responses.map(response => {
      return {
        ...response,
        studentDetails: response.studentId,
        studentId: undefined
      };
    });

    res.send({responses})
  } catch (err) {
    console.log(err.message);
    res.status(500).send("error fetching data");
  }
};

module.exports = {
  getAllProjectsController,
  getAllResponseController,
};

