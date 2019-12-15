//Models
const Like = require("../models/Like");
const Post = require("../models/Post");

const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

exports.setLikeToPost = async (authorId, postId) => {
    const like = new Like({
        item: mongoose.Types.ObjectId(postId),
        author: mongoose.Types.ObjectId(authorId),
    });

    try {
        const result = await like.save();
        const post = await Post.findOneById(postId);
        post.likes.push(mongoose.Types.ObjectId(result._id));
        return await post.save();
    } catch (e) {
        console.log(e);
    }
};

exports.deleteLikeFromPost = async (authorId, postId) => {
    return await  Like.deleteOne({ author: ObjectId(authorId), item: ObjectId(postId) });
};