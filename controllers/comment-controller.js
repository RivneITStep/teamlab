//Models
const Comment = require("../models/Comment");
//Midlleware
const checkValidationErrors = require("../midlleware/checkValidationErrors");
//Controllers
const MsgsController = require("./msgs-controller");

exports.getAllCommentsForSinglePost = async (req, res) => {
  try {
    const { id: postId } = req.params;
    const allCommentsForPost = await Comment.find({ postId: postId });

    const commentsWithFullInfo = await Promise.all(
      allCommentsForPost.map(async oneComment => {
        const { _id, postId, comment, commentDate } = oneComment;
        const { author } = await Comment.findOne({
          _id: _id
        }).populate("author");
        let fullComment = {
          _id,
          postId,
          comment,
          author,
          commentDate
        };

        return fullComment;
      })
    );
    res.status(200).json([MsgsController.Success(), { commentsWithFullInfo }]);
  } catch (error) {
    console.error(error.message);
    res.status(500).json(MsgsController.ServerError());
  }
};

exports.addCommentToSinglePost = async (req, res) => {
  try {
    checkValidationErrors(req, res);

    const { id: author } = req.user;
    const { id: postId } = req.params;
    const { comment } = req.body;

    const newComment = new Comment({
      postId,
      comment,
      author
    });

    newComment
      .save()
      .then(() => {
        res.status(200).json(MsgsController.Success());
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(MsgsController.Fail());
      });
  } catch (error) {
    console.error(error.message);
    if (error.kind === "ObjectId") {
      return res.status(404).json(MsgsController.NotFound("Post"));
    }
    res.status(500).json(MsgsController.ServerError());
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;

    Comment.deleteOne({ _id: commentId }, err => {
      if (err) {
        if (err.kind === "ObjectId")
          res.status(404).json(MsgsController.NotFound("Comment"));
        console.error(error.message);
        res.status(500).json(MsgsController.ServerError());
      }
      res.status(200).json(MsgsController.Success());
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json(MsgsController.ServerError());
  }
};

exports.updateComment = async (req, res) => {
  try {
    checkValidationErrors(req, res);

    const { updatedComment } = req.body;
    const { commentId } = req.params;

    const newComment = { comment: updatedComment };

    Comment.updateOne({ _id: commentId }, { $set: newComment }, err => {
      if (err) {
        if (err.kind === "ObjectId") {
          res.status(404).json({ msg: "Comment not found" });
        } else res.status(500).send("Operation failed. Server error");
      }
      res
        .status(200)
        .json({ msg: "Operation completed successfully. Comment updated" });
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Operation failed. Server error");
  }
};
