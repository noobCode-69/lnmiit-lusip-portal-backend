const mongoose = require("mongoose");
const roles = require("../utils/roles")


const UserSchema = mongoose.Schema({
  email: {
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
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("users", UserSchema);