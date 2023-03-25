const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const adminRoutes = require("./routes/adminRoute");
const teacherRoute = require("./routes/teacherRoute");
const studentRoute = require("./routes/studentRoute");
const usersRoute = require("./routes/usersRoute");
const generalRoute = require("./routes/generalRoute");

const PORT = 3000;
const app = express();
app.use(bodyParser.json());

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || origin === "http://example.com") {
        return callback(null, true);
      }
      if (origin === "http://example.com" && this.req.url === "/route1") {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
  })
);

app.use("/user", usersRoute);
app.use("/admin", adminRoutes);
app.use("/teacher", teacherRoute);
app.use("/student", studentRoute);
app.use("/general", generalRoute);

app.use(function (err, req, res, next) {
  res.send(err);
});

app.listen(PORT, () => {
  console.log("LISTENING TO THER SERVER");
});
