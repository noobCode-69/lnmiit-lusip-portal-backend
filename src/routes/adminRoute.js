const express = require("express")
const router = express.Router();
const adminControllers = require("../controllers/adminControllers")
const isAdmin = require('../middlewares/isAdmin')

router.get('/getRegistrationStatus' , isAdmin ,  adminControllers.getRegistrationStatus)
router.post('/toogleRegistrationStatus' , isAdmin ,  adminControllers.toggleRegistrationStatus)

module.exports = router;
