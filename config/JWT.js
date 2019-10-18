const jwt = require("jsonwebtoken");
const config = require("config");
const MsgsController = require("../controllers/msgs-controller");

exports.provideToken = async ({ _id }, res) => {
  const payload = {
    user: {
      id: _id
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