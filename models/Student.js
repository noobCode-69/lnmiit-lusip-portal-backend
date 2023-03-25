const mongoose = require("mongoose");
const schemas = require("../utils/schemas");
const years = require("../utils/years")



const TeacherSchema = mongoose.Schema({
  name : {
    type: String,
    required: true,
  },
  userId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : schemas.USERS
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

module.exports = mongoose.model("teachers", TeacherSchema);