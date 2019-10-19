const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
//Midllewares
const checkToken = require("../../midlleware/checkToken");
const checkRolle = require("../../midlleware/checkRolle");
//Controllers
const PostController = require("../../controllers/post-controller");
const MsgsController = require("../../controllers/msgs-controller");
const CommentController = require("../../controllers/comment-controller");
//POST Create new post
router.post(
  "/add-new-post",
  [
    check("text", MsgsController.Empty("Text"))
      .not()
      .isEmpty(),
    check("title", MsgsController.Empty("Title"))
      .not()
      .isEmpty(),
    check("text", MsgsController.Length("Post content", 100, 40000)).isLength({
      min: 6,
      max: 40000
    }),
    check("title", MsgsController.Length("Post title", 6, 100)).isLength({
      min: 6,
      max: 100
    })
  ],
  checkToken,
  checkRolle.checkAdminModerator,
  PostController.createNewPost
);
//GET get all posts 
router.get("/", PostController.getAllPosts);
//GET get single post
router.get("/single-post/:id", PostController.getSinglePost);
//DELETE delete single post
router.delete(
  "/single-post/:id/delete",
  checkToken,
  checkRolle.checkAdminModerator,
  PostController.deletePost
);

router.put(
  "/single-post/:id/update",
  [
    check("updatedTitle", MsgsController.Empty("Updated title"))
      .not()
      .isEmpty(),
    check("updatedText", MsgsController.Empty("Updated text"))
      .not()
      .isEmpty(),
    check(
      "updatedText",
      MsgsController.Length("Updated text", 100, 40000)
    ).isLength({ min: 6, max: 40000 }),
    check(
      "updatedTitle",
      MsgsController.Length("Updated title", 6, 100)
    ).isLength({ min: 6, max: 100 })
  ],
  checkToken,
  checkRolle.checkAdminModerator,
  PostController.updatePost
);

router.get(
  "/single-post/:id/all-comments",
  CommentController.getAllCommentsForSinglePost
);

router.post(
  "/single-post/:id/add-comment",
  [
    check("comment", MsgsController.Empty("Comment"))
      .not()
      .isEmpty(),
    check("comment", MsgsController.Length("Comment", 6, 5000)).isLength({
      min: 6,
      max: 5000
    })
  ],
  checkToken,
  CommentController.addCommentToSinglePost
);

router.delete(
  "/single-post/delete-comment/:commentId",
  checkToken,
  checkRolle.checkAuthor,
  CommentController.deleteComment
);

router.put(
  "/single-post/update-comment/:commentId",
  [
    check("updatedComment", MsgsController.Empty("Updated Comment"))
      .not()
      .isEmpty(),
    check(
      "updatedComment",
      MsgsController.Length("Updated Comment", 6, 5000)
    ).isLength({
      min: 6,
      max: 5000
    })
  ],
  checkToken,
  checkRolle.checkAuthor,
  CommentController.updateComment
);

module.exports = router;