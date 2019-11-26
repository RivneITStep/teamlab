const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
//Midllewares
const checkToken = require("../../midlleware/checkToken");
const checkRolle = require("../../midlleware/checkRolle");
//Controllers
const MsgsController = require("../../controllers/msgs-controller");
const {
  getUsers,
  getUser,
  createUser,
  updateDetails,
  updatePassword,
  deleteUser
} = require("../../controllers/user-controller");

router.get("/", checkToken, checkRolle.checkAdmin, getUsers);

router.get("/:id", checkToken, checkRolle.checkAdmin, getUser);

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
  createUser
);

router.put(
  "/:id/updatedetails",
  [
    check("name", MsgsController.Empty("Name"))
      .not()
      .isEmpty(),
    check("email", MsgsController.IncorrectData("Email")).isEmail()
  ],
  checkToken,
  updateDetails
);

router.put(
  "/:id/updatepassword",
  [
    check("newPassword", MsgsController.Length("Password", 6, 100)).isLength({
      min: 6,
      max: 100
    })
  ],
  checkToken,
  updatePassword
);

router.delete("/:id", checkToken, checkRolle.checkAdmin, deleteUser);

module.exports = router;
