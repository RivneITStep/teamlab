const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");

router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Not valid email").isEmail(),
    check("password", "Password must be 6 or more characters").isLength({
      min: 6
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      user = new User({
        name,
        email,
        password
      });

      await user.save();

      const token = user.getSignedJwtToken();

      res.status(200).json({ success: true, token });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
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
