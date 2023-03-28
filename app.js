const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const InitiateMongoServer = require("./src/config/db.config")
const adminRoutes = require("./src/routes/adminRoute");
const teacherRoute = require("./src/routes/teacherRoute");
const studentRoute = require("./src/routes/studentRoute");
const usersRoute = require("./src/routes/usersRoute");
const generalRoute = require("./src/routes/generalRoute");

const PORT = 3000;
const app = express();
app.use(bodyParser.json());

app.use(cors()) // just for now

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || origin === "http://example.com") {
//         return callback(null, true);
//       }
//       if (origin === "http://example.com" && this.req.url === "/route1") {
//         return callback(null, true);
//       }
//       return callback(new Error("Not allowed by CORS"));
//     },
//   })
// );

app.use("/user", usersRoute);
// app.use("/admin", adminRoutes);
app.use("/teacher", teacherRoute);
app.use("/student", studentRoute);
app.use("/general", generalRoute);

app.use(function (err, req, res, next) {
  res.send(err);
});


InitiateMongoServer().then(() => {
  app.listen(PORT, () => {
    console.log("LISTENING TO THER SERVER");
  });
})


