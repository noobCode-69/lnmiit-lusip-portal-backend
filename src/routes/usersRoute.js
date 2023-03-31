const express = require("express");
const usersContoller = require("../controllers/usersControllers");
const { check } = require("express-validator");

const router = express.Router();

router.post(
  "/signup",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Password should be atleast 6 digit long").isLength({
      min: 6,
    }),
  ],    
  usersContoller.signupController
);

router.post("/login", usersContoller.loginController);

router.post("/logout", usersContoller.logoutController);

module.exports = router;
