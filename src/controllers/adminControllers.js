const Admin = require("../models/Admin");
const Project = require('../models/Project')
const Response = require('../models/Response')



const toggleRegistrationStatus = async (req, res, next) => {
  try {
    let admin = await Admin.findOne({});
    if (!admin) {
      return res.status(500).send({ message: "No admin found!" });
    }
    const {registrationStatus} = admin;
    if(registrationStatus == true){
        admin.registrationStatus = false;
        await admin.save();
        return res.send({message : "Registration closed successfully!"})
    }
    admin.registrationStatus = true;
    await admin.save();
    await Project.deleteMany({})
    await Response.deleteMany({})
    res.send({ message : "Registration started successfully" });
  } catch (err) {
    res.status(500).send({ message: "Error Fetching Data..." });
  }
};

module.exports = {
  toggleRegistrationStatus,
};
