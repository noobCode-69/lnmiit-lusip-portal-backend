const express = require("express");
const usersContoller = require("../controllers/usersControllers");
require("dotenv").config();

const router = express.Router();



router.post("/signup", usersContoller.signupController);

router.post("/login", usersContoller.loginController);

router.get("/logout", usersContoller.logoutController);

module.exports = router;
