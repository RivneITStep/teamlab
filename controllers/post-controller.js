//Models
const Post = require("../models/Post");
const LikeController = require("./like-controller");
//Midlleware
const checkValidationErrors = require("../midlleware/checkValidationErrors");
//Controllers
const MsgsController = require("./msgs-controller");
//GET ALL POSTS
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({date: -1});
        res.status(200).json([MsgsController.Success(), posts]);
    } catch (error) {
        console.error(error.message);
        res.status(500).json(MsgsController.ServerError());
    }
};
//POST NEW POST
exports.createNewPost = async (req, res) => {
    try {
        checkValidationErrors(req, res);

        const {name, id} = req.user;
        const {title, text} = req.body;
        const author = {
            id,
            name
        };
        console.log("author:", author);

        const newPost = new Post({
            title,
            text,
            author
        });

        newPost
            .save()
            .then(() => {
                res.status(201).json(MsgsController.Success());
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(MsgsController.Fail());
            });
    } catch (error) {
        console.error(error.message);
        res.status(500).json(MsgsController.ServerError());
    }
};
//POSTS WITH LIKES,COMMENTS,VIEWS
exports.getSinglePost = async (req, res) => {
    try {
        const {id} = req.params;
        const post = await Post.findById(id);

        if (!post) {
            return res.status(404).json(MsgsController.NotFound("Post"));
        }
        // post.populate('likes');
        post.views += 1;
        await post.save();

        await post
            .populate('comments')
            .populate('likes')
            .exec((res, err) => {
                if (res)
                    console.log("res:", res);
                else console.log("err:", err)
            });

        res.status(200).json(post);
    } catch (error) {
        res.status(500).send(MsgsController.ServerError());
    }
};
//DELETE POST
exports.deletePost = async (req, res) => {
    try {
        const {id} = req.params;

        Post.deleteOne({_id: id}, err => {
            if (err) {
                if (err.kind === "ObjectId")
                    res.status(404).json(MsgsController.NotFound("Post"));
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
//UDATE POST
exports.updatePost = async (req, res) => {
    try {
        checkValidationErrors(req, res);

        const {updatedTitle, updatedText} = req.body;
        const {id} = req.params;

        const updatedPost = {};

        if (updatedText) updatedPost.text = updatedText;

        if (updatedTitle) updatedPost.title = updatedTitle;

        Post.updateOne({_id: id}, {$set: updatedPost}, err => {
            if (err) {
                if (err.kind === "ObjectId") {
                    res.status(404).json(MsgsController.NotFound("Post"));
                } else res.status(500).json(MsgsController.ServerError());
            }
            res.status(200).json(MsgsController.Success());
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json(MsgsController.ServerError());
    }
};
//ADD LIKE
exports.setLikeToPost = async (req, res) => {
    const {authorId, postId} = req.params;
    //CONST LIKE =
    await LikeController.setLikeToPost(authorId, postId);
    res.status(200).json(MsgsController.Success());
};
//DELETE LIKE
exports.deleteLike = async (req, res) => {
    const {authorId, postId} = req.params;
    await LikeController.deleteLikeFromPost(authorId, postId);
    res.status(200).json(MsgsController.Success());
};
