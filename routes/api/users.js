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
    }),
    check(
      "password",
      "Password must include one lowercase character, one uppercase character, a number, and a special character."
    ).matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{6,}$/,
      "i"
    )
  ],
  async (req, res) => {
    checkValidationErrors(req, res);

    const { name, email, password} = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json(MsgsController.AlreadyExist("User"));
      }

      user = new User({
        name,
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

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
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Not valid email").isEmail()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const fieldsToUpdate = {
      name: req.body.name,
      email: req.body.email
    };

    try {
      const user = await User.findByIdAndUpdate(req.params.id, fieldsToUpdate, {
        new: true
      });

      res.status(200).json({
        success: true,
        data: user
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);

router.put(
  "/:id/updatepassword",
  [
    check("newPassword", "Password must be 6 or more characters").isLength({
      min: 6
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.params.id);

      if (!(await user.matchPassword(req.body.currentPassword))) {
        return res.status(401).json({ msg: "Password incorrect" });
      }

      user.password = req.body.newPassword;
      await user.save();

      res.status(200).json({
        success: true,
        data: user
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
