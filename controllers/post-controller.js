//Models
const Post = require("../models/Post");
const Like = require("../models/Like");
//Midlleware
const checkValidationErrors = require("../midlleware/checkValidationErrors");
//Controllers
const MsgsController = require("./msgs-controller");
//GET ALL POSTS
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post
            .find()
            .sort({date: -1})
            .populate('comments')
            .populate('likes')
            .exec();
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
        const post = await Post.findById(id).populate('comments').populate('likes').exec();

        if (!post) {
            return res.status(404).json(MsgsController.NotFound("Post"));
        }

        post.views += 1;
        await post.save();
        res.status(200).json([MsgsController.Success(), post]);
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
//UPDATE POST
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
    try {
        const { postId: item} = req.params;

        const post = await Post.findById(item);

        const like = new Like({
            item
        });

        await like.save();
        post.likes.push(like._id);
        await post.save();
        res.status(200).json([MsgsController.Success(), like]);
    } catch (e) {
        res.status(400).json(MsgsController.Fail());
    }
};
//DELETE LIKE
exports.deleteLike = async (req, res) => {
    try {
        const {postId} = req.params;

        Like.deleteOne({item: postId}, err => {
            if (err) {
                if (err.kind === "ObjectId")
                    res.status(404).json(MsgsController.NotFound("Like"));
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

