const User = require("../models/User");
const Student = require("../models/Student");
const Teacher = require("../models/Teacher");
const Admin = require("../models/Admin");
const Session = require("../models/Session");
const crypto = require("crypto");
const roles = require("../config/roles.config");
const { validationResult } = require("express-validator");

const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({
      email,
      password,
    });

    if (!user) {
      return res.status(500).json({
        message: "Wrong Credentials",
      });
    }

    let typeId;

    if (user.role == roles.STUDENT) {
      const student = await Student.findOne({ userId: user._id });
      typeId = student._id;
    } else if (user.role == roles.ADMIN) {
      const admin = await Admin.findOne({ userId: user._id });
      typeId = admin._id;
    } else if (user.role == roles.TEACHER) {
      const teacher = await Teacher.findOne({ userId: user._id });
      typeId = teacher._id;
    }

    const sessionToken = crypto.randomBytes(16).toString("base64");
    const { _id: userId, role, name } = user;
    let session = Session.findOne({ email });
    if (session) {
      await Session.deleteOne({ email });
    }
    session = new Session({
      userId: userId,
      name: name,
      role: role,
      token: sessionToken,
      email: email,
    });
    const sessionData = await session.save();
    res.cookie("session", sessionToken, {
      httpOnly: true,
      secure: true,
      maxAge: 432000000,
      sameSite: "none",
    });
    res.send({
      sessionData: { name, typeId, email, role, userId },
      message: "Login Successfully",
    });
  } catch (e) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const signupController = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    let errorString = "";
    const { errors: errorsObj } = errors;
    for (let i = 0; i < errorsObj.length; ++i) {
      errorString += " " + errorsObj[i].msg + " ,";
    }
    errorString = errorString.slice(0, -1);
    return res.status(500).send({ message: errorString });
  }

  const { email, password, name, college, year, branch } = req.body;
  try {
    let userData, studentData;
    let user = await User.findOne({
      email,
    });
    if (user) {
      return res.status(500).json({
        message: "User Already Exists",
      });
    }
    user = new User({
      name,
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
    res.send({ message: "User Created Successfully" });
  } catch (err) {
    res.status(500).send({ message: "Error in Saving" });
  }
};

const logoutController = async (req, res, next) => {
  const { token } = req.body;
  try {
    const session = await Session.findOneAndDelete({
      token,
    });
    res.send({ message: "Logged Out Successfully" });
  } catch (err) {
    res.status(500).send({ message: "Error in Logging Out" });
  }
};

module.exports = {
  loginController,
  signupController,
  logoutController,
};
