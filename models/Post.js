const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  date: {
    type: String,
    default: Date.now
  }
});

module.exports = Post = mongoose.model("post", PostSchema);
