const Session = require("../models/Session");



const getSessionDetails = async (req, res, next) => {
  const token = req.cookies['session']
  try {
    let response = await Session.findOne({
      token,
    });
    if (!response) {
      return res.status(500).json({
        message: "No Session Found, Please Login Again",
      });
    }
    res.send({ role: response.role });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};



module.exports = { getSessionDetails };
