const Session = require("../models/Session")
const roles = require('../config/roles.config')

const isTeacher = async (req , res, next) => {
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
        if(response.role != roles.TEACHER){
            return res.status(500).json({
                message : "Not Authorized"
            })
        }
        next();
      } catch (error) {
        res.status(500).send({ message: error.message });
      }
}

module.exports = isTeacher;