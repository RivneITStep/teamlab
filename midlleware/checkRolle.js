const MsgsController = require("../controllers/msgs-controller");

const Comment = require("../models/Comment");

exports.checkAdminModerator = (req, res, next) => {
  try {
    const { rolle } = req.user;
    if (rolle !== ("admin" || "moderator"))
      res.status(403).json(MsgsController.NoRights("admin", "moderator"));
    next();
  } catch (error) {
    res.status(500).json(MsgsController.ServerError());
  }
};

exports.checkAuthor = async (req, res, next) => {
  try {
    const { _id, rolle } = req.user;
    const { commentId } = req.params;
    const comment = await Comment.findById(commentId);
    const { author } = comment;
    if (rolle === ("admin" || "moderator")) next();
    if (_id !== author) res.status(403).json(MsgsController.NoRights("author"));
    next();
  } catch (error) {
    res.status(500).json(MsgsController.ServerError());
  }
};