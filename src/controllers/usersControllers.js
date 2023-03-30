const User = require("../models/User");
const Student = require("../models/Student");
const Session = require("../models/Session")
const crypto = require("crypto")




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
    const sessionToken = crypto.randomBytes(16).toString('base64')
    const {_id : userId,  role , name} = user;
    let session = Session.findOne({email});
    if(session){
      await Session.deleteOne({email})
    }
    session = new Session({
      userId : userId,
      name : name,
      role : role,
      token : sessionToken,
      email : email
    })
    const sessionData = await session.save();
    res.send({sessionData : sessionData , message : "Login Successfully"})
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
      return res.status(500).json({
        message: "User Already Exists",
      });
    }
    user = new User({
      name , 
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
    res.send({message : "User Created Successfully"})
  } catch (err) {
    res.status(500).send({message : "Error in Saving"});
  }
};




const logoutController = async (req, res) => {
};

module.exports = {
  loginController,
  signupController,
  logoutController,
};
