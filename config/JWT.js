const jwt = require("jsonwebtoken");
const config = require("config");
const MsgsController = require("../controllers/msgs-controller");

module.exports = async ({ id, role, name }, res) => {
  const payload = {
    user: {
      id,
      role,
      name
    }
  };

  jwt.sign(
    payload,
    config.get("jwtSecret"),
    { expiresIn: 3600000 },
    (err, token) => {
      if (err) throw err;
      res.status(200).json([{ token }, MsgsController.Log("in")]);
    }
  );
};