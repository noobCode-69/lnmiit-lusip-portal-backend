const mongoose = require("mongoose");
const departments = require("../config/departments.config");
const schemas = require("../config/schemas.config");

const TeacherSchema = mongoose.Schema({
  name : {
    type: String,
    required: true,
  },
  userId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : schemas.USERS,
    required: true
  },
  designation : {
    type : String ,
    required : true
  },
  department : {
    type : String,
    emum : [departments.CCE , departments.ECE , departments.CSE , departments.MME , departments.HSS , departments.PHYSICS, departments.MATHS],
    required : true
  }

});

module.exports = mongoose.model("teachers", TeacherSchema);