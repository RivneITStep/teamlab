const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");

router.get(
  "/",
  [
    check("email", "Email is required")
      .not()
      .isEmpty(),
    check("email", "Invalid email").isEmail(),
    check("password", "Password is required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    User.findOne({ email })
      .then(user => {
        if (!user)
          return res.status(400).json({ errors: { msg: "User not found" } });

        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;

          if (isMatch)
            return res
              .status(200)
              .json({ response: { msg: "User authenticated" } });
          else
            return res
              .status(400)
              .json({ response: { msg: "Wrong password" } });
        });
      })
      .catch(err => console.log(err));
  }
);

module.exports = router;
