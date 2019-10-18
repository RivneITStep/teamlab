const jwt = require("jsonwebtoken");
const config = require("config");
const MsgsController = require("../controllers/msgs-controller");

module.exports = function(req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json(MsgsController.Login());
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json(MsgsController.InvalidToken());
  }
};