const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
require("dotenv").config();
const InitiateMongoServer = require("./src/config/db.config")
const teacherRoute = require("./src/routes/teacherRoute");
const studentRoute = require("./src/routes/studentRoute");
const adminRoute = require("./src/routes/adminRoute")
const usersRoute = require("./src/routes/usersRoute");
const generalRoute = require("./src/routes/generalRoute");
const sessionRoute = require('./src/routes/sessionRoute.js')
const PORT = 3000;
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


app.use("/user", usersRoute);
app.use("/teacher", teacherRoute);
app.use("/student", studentRoute);
app.use("/general", generalRoute);
app.use('/session' , sessionRoute);
app.use("/admin", adminRoute)

app.use(function (err, req, res, next) {
  res.send(err);
});


InitiateMongoServer().then(() => {
  app.listen(PORT, () => {
    console.log("LISTENING TO THER SERVER");
  });
})


