const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
//Controllers
const AuthController = require("../../controllers/auth-controller");
const MsgsController = require("../../controllers/msgs-controller");

router.get(
  "/in",
  [
    check("email", MsgsController.Empty("Email"))
      .not()
      .isEmpty(),
    check("email", MsgsController.IncorrectData("Email")).isEmail(),
    check("password", MsgsController.Empty("Password"))
      .not()
      .isEmpty()
  ],
  AuthController.Login
);

router.get("/logout", AuthController.Logout);

module.exports = router;