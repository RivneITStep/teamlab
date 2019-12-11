const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

//Models
const User = require("../../models/User");
//Controllers
const MsgsController = require("../../controllers/msgs-controller");
//Midlleware
const checkValidationErrors = require("../../midlleware/checkValidationErrors");

router.post(
  "/",
  [
    check("name", MsgsController.Empty("Name"))
      .not()
      .isEmpty(),
    check("email", MsgsController.IncorrectData("Email")).isEmail(),
    check("password", MsgsController.Length("Password", 6, 100)).isLength({
      min: 6,
      max: 100
    })
  ],
  async (req, res) => {
    checkValidationErrors(req, res);

    const { name, email, password, repassword } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json(MsgsController.AlreadyExist("User"));
      } else if (password !== repassword) {
        return res.status(400).json({ msg: "Passwords do not match" });
      }

      user = new User({
        name,
        email,
        password
      });

      await user.save();
      await user.getSignedJwtToken(res);
    } catch (error) {
      console.error(error.message);
      res.status(500).json(MsgsController.ServerError());
    }
  }
);

router.put(
  "/:id/updatedetails",
  [
    check("name", MsgsController.Empty("Name"))
      .not()
      .isEmpty(),
    check("email", MsgsController.IncorrectData("Email")).isEmail()
  ],
  async (req, res) => {
    checkValidationErrors(req, res);

    const fieldsToUpdate = {
      name: req.body.name,
      email: req.body.email
    };

    try {
      const user = await User.findByIdAndUpdate(req.params.id, fieldsToUpdate, {
        new: true
      });

      res.status(200).json([{ user }, MsgsController.Success()]);
    } catch (error) {
      console.error(error.message);
      res.status(500).json(MsgsController.ServerError());
    }
  }
);

router.put(
  "/:id/updatepassword",
  [
    check("newPassword", MsgsController.Length("Password", 6, 100)).isLength({
      min: 6,
      max: 100
    })
  ],
  async (req, res) => {
    checkValidationErrors(req, res);

    try {
      const user = await User.findById(req.params.id);

      if (!(await user.matchPassword(req.body.currentPassword))) {
        return res
          .status(401)
          .json(MsgsController.IncorrectData("Current password"));
      }

      user.password = req.body.newPassword;
      await user.save();

      res.status(200).json([{ user }, MsgsController.Success()]);
    } catch (error) {
      console.error(error.message);
      res.status(500).json(MsgsController.ServerError());
    }
  }
);

module.exports = router;
