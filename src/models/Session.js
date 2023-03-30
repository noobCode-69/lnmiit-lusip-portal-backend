const mongoose = require('mongoose');
const roles = require("../config/roles.config")


const Session = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    expires: '5d',
    required : true
  },
  role  : {
    type : String,
    enum : [roles.TEACHER , roles.STUDENT , roles.ADMIN],
    required : true
  },
  name : {
    type : String,
    required : true
  },
  email : {
    type :  String,
    required : true
  }
});




module.exports = mongoose.model("sessions", Session);