const mongoose = require("mongoose");
const schemas = require("../utils/schemas");
const years = require("../utils/years")

const ProjectSchema = mongoose.Schema({
  name : {
    type: String,
    required: true,
  },
  description : {
    type : String,
    required : true,
  },
  teacherId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : schemas.TEACHERS,
    required : true
  },
  modeOfExecution : {
    type : String ,
    enum : ['Offline', 'Online' , 'Either'],
    required : true,
  },
  prerequists : {
    type : String ,
    required : true, 
  },
  validYear : {
    type : [String],
    enum : [years.FIRST , years.SECOND , years.THIRD , years.FOURTH , years.FIFTH , "Open for all"],
    required : true 
  },
  validBranch : {
    type : [String] , 
    required : true
  }
});

module.exports = mongoose.model("projects", ProjectSchema);