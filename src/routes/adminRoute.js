const express = require("express")
const router = express.Router();
const adminControllers = require("../controllers/adminControllers")
const isAdmin = require('../middlewares/isAdmin')

router.post('/toggleRegistrationStatus' , isAdmin ,  adminControllers.toggleRegistrationStatus)

module.exports = router;
