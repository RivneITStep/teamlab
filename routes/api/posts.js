const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
// const auth = require("../../config/auth");

const Post = require("../../models/Post");
const Profile = require("../../models/Post");
const User = require("../../models/User");

router.post(
  "/",
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
      const user = await User.findById(req.user.id).select("-password");

      const newPost = new Post({
        title: req.body.title,
        text: req.body.text,
        author: user.name,
        user: req.user.id
      });

      const post = await newPost.save();

      res.json(post);
    } catch (error) {
      console.error(error.massage);
      res.status(500).send("Server error");
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (error) {
    console.error(error.massage);
    res.status(500).send("Server error");
  }
});

router.get("/single-post/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    console.error(error.massage);
    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(500).send("Server error");
  }
});

router.delete("/single-post/:id", async (req, res) => {
  try {
    const posts = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    if (post.user.toString !== req.user.id) {
      res.status(401).json({ msg: "User not authorized" });
    }

    await post.remove();
    res.json({ msg: "Post deleted" });

    res.json(posts);
  } catch (error) {
    console.error(error.massage);
    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(500).send("Server error");
  }
});

router.put("/single-post/:id", async (req, res) => {
  try {
    const posts = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    if (post.user.toString !== req.user.id) {
      res.status(401).json({ msg: "User not authorized" });
    }

    await post.remove();
    res.json({ msg: "Post deleted" });

    res.json(posts);
  } catch (error) {
    console.error(error.massage);
    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(500).send("Server error");
  }
});

module.exports = router;
