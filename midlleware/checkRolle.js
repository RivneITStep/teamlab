//Controllers
const MsgsController = require("../controllers/msgs-controller");
//Models
const Comment = require("../models/Comment");

exports.checkAdminModerator = (req, res, next) => {
  try {
    const { role } = req.user;
    if (role !== "moderator" && role !== "admin")
      res.status(403).json(MsgsController.NoRights("admin", "moderator"));
    next();
  } catch (error) {
    res.status(500).json(MsgsController.ServerError());
  }
};

exports.checkAdmin = (req, res, next) => {
  try {
    const { role } = req.user;
    if (role !== "admin")
      res.status(403).json(MsgsController.NoRights("admin"));
    next();
  } catch (error) {
    res.status(500).json(MsgsController.ServerError());
  }
};

exports.checkModerator = (req, res, next) => {
  try {
    const { role } = req.user;
    if (role !== "moderator")
      res.status(403).json(MsgsController.NoRights("moderator"));
    next();
  } catch (error) {
    res.status(500).json(MsgsController.ServerError());
  }
};

exports.checkAuthor = async (req, res, next) => {
  try {
    const { id, role } = req.user;
    console.log("req.user:", req.user);
    const { commentId } = req.params;
    const comment = await Comment.findById(commentId);
    const { author } = comment;
    console.log("role:", role);
    if (role !== "moderator" && role !== "admin") next();
    else if (id === author.id) next();
    else res.status(403).json(MsgsController.NoRights("author"));
  } catch (error) {
    res.status(500).json(MsgsController.ServerError());
  }
};
