const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommentSchema = Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    postId: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true
    },
    comment: {
      type: String,
      maxLength: 5000,
      required: true
    },
    commentDate: {
      type: Date,
      default: Date.now,
      required: true
    }
  },
  {
    collection: "comments"
  }
);

module.exports = mongoose.model("Comment", CommentSchema);
