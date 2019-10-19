const bcrypt = require("bcryptjs");
//ProvideToken
const JWT = require("../config/JWT");
//Models
const User = require("../models/User");
//Midlleware
const checkValidationErrors = require("../midlleware/checkValidationErrors");
//Controllers
const MsgsController = require("./msgs-controller");

exports.Login = async (req, res) => {
  try {
    checkValidationErrors(req, res);

    const { email, password } = req.body;

    User.findOne({ email })
      .then(user => {
        if (!user) res.status(404).json(MsgsController.NotFound("User"));

        bcrypt.compare(password, user.password, async (err, isMatch) => {
          if (err) throw err;

          if (isMatch) await JWT(user, res);
          else res.status(400).json(MsgsController.IncorrectData("Password"));
        });
      })
      .catch(err => console.log(err));
  } catch (error) {
    console.error(error.message);
    res.status(500).json(MsgsController.ServerError());
  }
};

exports.Logout = async (req, res) => {
  try {
    req.logout();
    res.redirect("/api/auth").json(MsgsController.Log("out"));
  } catch (error) {
    console.error(error.message);
    res.status(500).json(MsgsController.ServerError());
  }
};