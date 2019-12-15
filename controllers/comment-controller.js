//Models
const Comment = require("../models/Comment");
const Post = require("../models/Post");
//Midlleware
const checkValidationErrors = require("../midlleware/checkValidationErrors");
//Controllers
const MsgsController = require("./msgs-controller");
//Mongoose
const mongoose = require('mongoose');

exports.addCommentToSinglePost = async (req, res) => {
    try {
        checkValidationErrors(req, res);

        const {id: author} = req.user;
        const {id: postId} = req.params;
        const {comment} = req.body;

        const post = await Post.findById(postId);
        //create new comment
        const newComment = new Comment({
            _id: new mongoose.Types.ObjectId(),
            postId,
            comment,
            author
        });
        // added comment to single post and save it
        post.comments.push(newComment._id);
        await post.save();
        //save comment
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
        console.error("erRor:",error.message);
        if (error.kind === "ObjectId") {
            return res.status(404).json(MsgsController.NotFound("Post"));
        }
        res.status(500).json(MsgsController.ServerError());
    }
};

exports.deleteComment = async (req, res) => {
    try {
        const {commentId} = req.params;

        Comment.deleteOne({_id: commentId}, err => {
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

        const {updatedComment} = req.body;
        const {commentId} = req.params;

        const newComment = {comment: updatedComment};

        Comment.updateOne({_id: commentId}, {$set: newComment}, err => {
            if (err) {
                if (err.kind === "ObjectId") {
                    res.status(404).json({msg: "Comment not found"});
                } else res.status(500).send("Operation failed. Server error");
            }
            res
                .status(200)
                .json(MsgsController.Success());
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send(MsgsController.ServerError());
    }
};
