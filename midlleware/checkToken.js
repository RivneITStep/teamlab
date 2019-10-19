const jwt = require("jsonwebtoken");
const config = require("config");
const MsgsController = require("../controllers/msgs-controller");

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json(MsgsController.PlsLogin());
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    console.log("User:",req.user);
    next();
  } catch (error) {
    res.status(401).json(MsgsController.InvalidToken());
  }
};