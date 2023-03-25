const User = require("../models/User");
const Student = require("../models/Student");

const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({
      email,
      password,
    });
    if (!user) {
      return res.status(400).json({
        message: "Wrong Credentials",
      });
    }
    res.send({email , password })
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Server Error",
    });
  }
};



const signupController = async (req, res, next) => {
  const { email, password, name, college, year, branch } = req.body;
  try {
    let userData, studentData;
    let user = await User.findOne({
      email,
    });
    if (user) {
      return res.status(400).json({
        msg: "User Already Exists",
      });
    }
    user = new User({
      email,
      password,
    });
    userData = await user.save();
    let student = Student({
      name,
      userId: userData._id,
      college,
      year,
      branch,
    });
    studentData = await student.save();
    console.log(userData, studentData);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Error in Saving");
  }
};

const logoutController = (req, res) => {
  // tokens delete
};

module.exports = {
  loginController,
  signupController,
  logoutController,
};
