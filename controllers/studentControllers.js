const Response = require("../models/Response")

const applyController = async (req, res, next) => {
  const { studentId , projectId } = req.body;
  try {
    let response = await Response.findOne({
      studentId , projectId
    })
    if(response) {
      return res.status(400).json({
        msg : "already applied"
      })
    }
    response = new Response({
      studentId,
      projectId
    });
    let responseData = await response.save();
    res.send({msg : "applied successfully"})
  } catch (err) {
    console.log(err.message);
    res.status(500).send("error in applying");
  }

};

module.exports = {
  applyController,
};
