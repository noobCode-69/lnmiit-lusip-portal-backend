const mongoose = require("mongoose");
const schemas = require("../config/schemas.config");



const ResponseSchema = mongoose.Schema({
  studentId  : {
    type : mongoose.Schema.Types.ObjectId , 
    ref : schemas.STUDENTS,
    required : true,
  },
  projectId : {
    type : mongoose.Schema.Types.ObjectId,  
    ref : schemas.PROJECTS,
    required : true,
  },
  responseStatus : {
    type : Boolean,
    enum : [true,false],
    required : true,
    default : false
  }
});

module.exports = mongoose.model("responses", ResponseSchema);