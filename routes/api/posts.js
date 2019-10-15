const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
// const auth = require("../../config/auth");

const Post = require("../../models/Post");
const Comment = require("../../models/Comment");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

router.post(
  "/add-new-post",
  [
    check("text", "Text is required")
      .not()
      .isEmpty(),
    check("title", "Title is required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // const user = await User.findById(req.user.id).select("-password");
      const { title, text, author } = req.body;

      const newPost = new Post({
        title,
        text,
        author
      });

      newPost
        .save()
        .then(() => {
          res.status(200).json({ msg: "Operation completed successfully." });
        })
        .catch(err => {
          console.log(err);
          res.status(400).json({ msg: "Operation failed" });
        });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

router.get("/single-post/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

router.delete("/single-post/:id/delete", async (req, res) => {
  try {
    const { id } = req.params;

    Post.deleteOne({ _id: id }, err => {
      if (err) {
        if (err.kind === "ObjectId")
          res.status(404).json({ msg: "Post not found" });
        console.error(error.message);
        res.status(500).send("Server error");
      }
      res.status(200).json({ msg: "Post deleted" });
    });
  } 
  catch (error) {
    console.error(error.message);
    res.status(500).send("Operation failed. Server error");
  }
});

router.put("/single-post/:id/update", async (req, res) => {
  try {
    const { updatedTitle, updatedText } = req.body;
    const { id } = req.params;

    if (!updatedTitle && !updatedText)
      res.status(404).json({
        msg: "Operation failed. Fields 'New Title' and 'New Text' are empty."
      });

    const updatedPost = {};

    if (updatedText) updatedPost.text = updatedText;

    if (updatedTitle) updatedPost.title = updatedTitle;

    Post.updateOne({ _id: id }, { $set: updatedPost }, err => {
      if (err) {
        if (err.kind === "ObjectId") {
          res.status(404).json({ msg: "Post not found" });
        } else res.status(500).send("Operation failed. Server error");
      }
      res
        .status(200)
        .json({ msg: "Operation completed successfully. Post updated" });
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Operation failed. Server error");
  }
});

router.get("/single-post/:id/all-comments", async (req, res) => {
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
    res.status(200).json({ commentsWithFullInfo });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

router.post("/single-post/:id/add-comment", async (req, res) => {
  try {
    const { author, postId, comment } = req.body;

    const newComment = new Comment({
      postId,
      comment,
      author
    });

    newComment
      .save()
      .then(() => {
        res.status(200).json({ msg: "Successefully Created New Comment" });
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({ msg: "Operation Failed, cant create comment" });
      });
  } catch (error) {
    console.error(error.message);
    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(500).send("Server error");
  }
});

router.delete("/single-post/delete-comment/:commentId", async (req, res) => {
  try {
    const { commentId } = req.params;

    Comment.deleteOne({ _id: commentId }, err => {
      if (err) {
        if (err.kind === "ObjectId")
          res.status(404).json({ msg: "Comment not found" });
        console.error(error.message);
        res.status(500).send("Server error");
      }
      res.status(200).json({ msg: "Comment deleted" });
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Operation failed. Server error");
  }
});

router.put("/single-post/update-comment/:commentId", async (req, res) => {
  try {
    const { updatedComment } = req.body;
    const { commentId } = req.params;

    if (!updatedComment)
      res.status(404).json({
        msg: "Operation failed. Nothing to update."
      });

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
});

module.exports = router;
