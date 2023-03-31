const express = require('express')
const router = express.Router();
const sessionControllers = require("../controllers/sessionControllers");

router.post('/getSessionDetails' , sessionControllers.getSessionDetails)

module.exports = router