const mongoose = require("mongoose");

const schemas = require("../utils/schemas");



const ResponseSchema = mongoose.Schema({
  studentID : {
    type : mongoose.Schema.Types.ObjectId,  
    ref : schemas.STUDENTS
  },

  projectID : {
    type : mongoose.Schema.Types.ObjectId,  
    ref : schemas.PROJECTS
  },
  responseType : {
    type : Boolean,
    enum : [true,false],
    required : true,
    default : false
  }

});

module.exports = mongoose.model("responses", ResponseSchema);