const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProjectSchema = new mongoose.Schema({
  author: {
    id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String }
  },
  name: {
    type: String,
    required: true
  },
  slug: String,
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: "no-img.jpg"
  },
  stage: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Project = mongoose.model("Project", ProjectSchema);
