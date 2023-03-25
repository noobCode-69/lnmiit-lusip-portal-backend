const mongoose = require("mongoose");
const departments = require("../utils/departments");
const schemas = require("../utils/schemas");


const TeacherSchema = mongoose.Schema({
  name : {
    type: String,
    required: true,
  },
  userId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : schemas.USERS
  },
  department : {
    type : String,
    emum : [departments.CCE , departments.ECE , departments.CSE , departments.ME]
  }

});

module.exports = mongoose.model("teachers", TeacherSchema);