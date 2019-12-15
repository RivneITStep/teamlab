const mongoose = require("mongoose");
const {Schema} = mongoose;

const PostSchema = new Schema({
    author: {
        id: {type: Schema.Types.ObjectId, ref: "User", required: true},
        name: {type: String}
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Like'
        }
    ],
    views: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    }
});

module.exports = Post = mongoose.model("Post", PostSchema);