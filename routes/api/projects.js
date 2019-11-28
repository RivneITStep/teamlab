const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
//Midllewares
const checkToken = require("../../midlleware/checkToken");
const checkRolle = require("../../midlleware/checkRolle");
//Controllers
const MsgsController = require("../../controllers/msgs-controller");
const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject
} = require("../../controllers/projects-controller");

router
  .route("/")
  .get(getProjects)
  .post(
    [
      check("title", MsgsController.Empty("Title"))
        .not()
        .isEmpty(),
      check("description", MsgsController.Empty("Description"))
        .not()
        .isEmpty(),
      check(
        "description",
        MsgsController.Length("Project content", 100, 40000)
      ).isLength({
        min: 6,
        max: 40000
      }),
      check("title", MsgsController.Length("Project title", 6, 100)).isLength({
        min: 6,
        max: 100
      })
    ],
    checkToken,
    checkRolle.checkAdminModerator,
    createProject
  );

router
  .route("/:id")
  .get(getProject)
  .put(
    [
      check("title", MsgsController.Empty("Title"))
        .not()
        .isEmpty(),
      check("description", MsgsController.Empty("Description"))
        .not()
        .isEmpty(),
      check(
        "description",
        MsgsController.Length("Project content", 100, 40000)
      ).isLength({
        min: 6,
        max: 40000
      }),
      check("title", MsgsController.Length("Project title", 6, 100)).isLength({
        min: 6,
        max: 100
      })
    ],
    checkToken,
    checkRolle.checkAdminModerator,
    updateProject
  )
  .delete(checkToken, checkRolle.checkAdminModerator, deleteProject);

module.exports = router;
