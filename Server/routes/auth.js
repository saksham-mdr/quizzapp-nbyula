const express = require("express");
const router = express.Router();

const { login, register,myProfile } = require("../controllers/auth");
const auth = require("../middleware/auth");

router.route("/login").post(login);

router.route("/register").post(register);

router.get("/myprofile", auth, myProfile);
module.exports = router;
