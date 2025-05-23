const express = require("express");
const router = express.Router();
const {register, login, getUserData} = require("../controllers/userController")
const {isVerifiedUser} = require("../middlewares/tokenVerification");

//Authentication Routes
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/").get(isVerifiedUser,getUserData);

module.exports = router;