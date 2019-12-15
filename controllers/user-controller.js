//Models
const User = require("../models/User");
//Midlleware
const checkValidationErrors = require("../midlleware/checkValidationErrors");
//Controllers
const MsgsController = require("./msgs-controller");

// @desc    Get all users
// @route   GET /api/users
// access   Admin only
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find().sort({ date: -1 });

    res.status(200).json({ count: users.length, users });
  } catch (error) {
    res.status(500).json(MsgsController.ServerError());
  }
};

// @desc    Get user by id
// @route   GET /api/users/:id
// access   Admin only
exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(400).json(MsgsController.NotFound("User"));
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json(MsgsController.ServerError());
  }
};

// @desc    Create new user
// @route   POST /api/users
// access   Public
exports.createUser = async (req, res, next) => {
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
};

// @desc    Update user's name, email
// @route   PUT /api/users/:id/updatedetails
// access   Private
exports.updateDetails = async (req, res, next) => {
  checkValidationErrors(req, res);

  const fieldsToUpdate = {
    name: req.body.name,
    email: req.body.email
  };

  try {
    const user = await User.findByIdAndUpdate(req.params.id, fieldsToUpdate, {
      new: true
    });

    res.status(200).json({ user });
  } catch (error) {
    console.error(error.message);
    res.status(500).json(MsgsController.ServerError());
  }
};

// @desc    Update user's password
// @route   PUT /api/users/:id/updatepassword
// access   Private
exports.updatePassword = async (req, res, next) => {
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

    res.status(200).json({ user });
  } catch (error) {
    console.error(error.message);
    res.status(500).json(MsgsController.ServerError());
  }
};

// @desc    Delete user
// @route   DELETE /api/users/:id
// access   Admin only
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(400).json(MsgsController.NotFound("User"));
    }

    res.status(200).json(MsgsController.Success());
  } catch (error) {
    res.status(500).json(MsgsController.ServerError());
  }
};
