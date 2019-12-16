const mongoose = require("mongoose");
const slugify = require("slugify");
const { Schema } = mongoose;

const ProjectSchema = new mongoose.Schema({
  author: {
    id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String }
  },
  title: {
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
    type: String,
    default: "Open"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

ProjectSchema.pre("save", function(next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

module.exports = Project = mongoose.model("Project", ProjectSchema);
