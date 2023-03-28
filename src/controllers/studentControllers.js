const Response = require("../models/Response")

const applyController = async (req, res, next) => {
  const { studentId , projectId } = req.body;
  try {
    let response = await Response.findOne({
      studentId , projectId
    })
    if(response) {
      return res.status(500).json({
        message : "Alredy Applied!"
      })
    }
    response = new Response({
      studentId,
      projectId : projectId
    });
    let responseData = await response.save();
    res.send({message : "Applied Successfully!"})
  } catch (error) {
    console.log(error.message);
    res.status(500).send({message : error.message});
  }

};

module.exports = {
  applyController,
};
