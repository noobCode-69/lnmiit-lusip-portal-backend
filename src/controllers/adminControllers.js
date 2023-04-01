const Admin = require("../models/Admin");
const Project = require('../models/Project')
const Response = require('../models/Response')


const getRegistrationStatus = async (req, res, next) => {
  try {
    let admin = await Admin.findOne({});
    if (!admin) {
      res.status(500).send({ message: "No admin found!" });
    }
    const status = admin.registrationStatus;
    res.send({ status: status });
  } catch (err) {
    res.status(500).send({ message: "Error Fetching Data..." });
  }
};

const toggleRegistrationStatus = async (req, res, next) => {
  try {
    let admin = await Admin.findOne({});
    if (!admin) {
      res.status(500).send({ message: "No admin found!" });
    }
    const {status} = admin.registrationStatus;

    if(status == true){
        admin.registrationStatus = false;
        await admin.save();
        res.send({message : "Registration closed successfully!"})
    }
    await Project.deleteMany({})
    await Response.deleteMany({})
    res.send({ message : "Registration started successfully" });
  } catch (err) {
    res.status(500).send({ message: "Error Fetching Data..." });
  }
};

module.exports = {
  getRegistrationStatus,
  toggleRegistrationStatus,
};
