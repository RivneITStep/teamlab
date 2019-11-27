const mongoose = require("mongoose");
const {Schema} = mongoose;

const LikeSchema = new Schema({
    item: {
        type: Schema.Types.ObjectId,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    created: {
        type: Date,
        default: Date.now,
        required: true
    },
});

module.exports = Like = mongoose.model("Like", LikeSchema);