const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const InitiateMongoServer = require("./src/config/db.config");
const teacherRoute = require("./src/routes/teacherRoute");
const studentRoute = require("./src/routes/studentRoute");
const adminRoute = require("./src/routes/adminRoute");
const usersRoute = require("./src/routes/usersRoute");
const generalRoute = require("./src/routes/generalRoute");
const sessionRoute = require("./src/routes/sessionRoute.js");
const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", process.env.FRONTEND_URI);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});



app.use("/api/user", usersRoute);
app.use("/api/teacher", teacherRoute);
app.use("/api/student", studentRoute);
app.use("/api/general", generalRoute);
app.use("/api/session", sessionRoute);
app.use("/api/admin", adminRoute);

app.use(function (err, req, res, next) {
  res.send(err);
});

InitiateMongoServer().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("LISTENING TO THER SERVER");
  });
});
