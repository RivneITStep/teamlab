const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const User = require("../../models/User");
//Controllers
const AuthController = require("../../controllers/auth-controller");
const MsgsController = require("../../controllers/msgs-controller");
// Midleware
const auth = require("../../midlleware/checkToken");

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.post(
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
