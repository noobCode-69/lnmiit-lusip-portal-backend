const mongoose = require("mongoose");
const roles = require("../config/roles.config")


const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique : true,
    match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  },
  name : {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum : [roles.TEACHER , roles.STUDENT , roles.ADMIN],
    default : roles.STUDENT
  },
  password: {
    type: String,
    required: true,
    minlength : 6
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("users", UserSchema);