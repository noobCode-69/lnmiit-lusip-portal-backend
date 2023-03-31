const mongoose = require("mongoose");
const schemas = require("../config/schemas.config");
const years = require("../config/years.config")



const StudentSchema = mongoose.Schema({
  name : {
    type: String,
    required: true,
  },
  userId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : schemas.USERS,
    required : true
  },
  
  college : {
    type : String ,
    required : true,
  },
  year : {
    type : String ,
    enum : [years.FIRST, years.SECOND , years.THIRD, years.FOURTH , years.FIFTH],
    required : true
  },
  branch : {
    type : String ,
    required : true,
  }

});

module.exports = mongoose.model("students", StudentSchema);