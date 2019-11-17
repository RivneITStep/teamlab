const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
//Controllers
const MsgsController = require("../controllers/msgs-controller");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "user"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre("save", async function(next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.getSignedJwtToken = async function(res) {
  const payload = {
    user: {
      id: this._id
    }
  };

  jwt.sign(
    payload,
    config.get("jwtSecret"),
    { expiresIn: 3600000 },
    (err, token) => {
      if (err) throw err;
      res.status(200).json({ token });
    }
  );
};

UserSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = User = mongoose.model("User", UserSchema);
