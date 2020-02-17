const mongoose = require("mongoose");
const {Schema} = mongoose;

const LikeSchema = new Schema(
    {
        item: {
            type: Schema.Types.ObjectId,
            required: true
        },
        created: {
            type: Date,
            default: Date.now,
            required: true
        }
    },
    {
        collection: "likes"
    }
);

module.exports = mongoose.model("Like", LikeSchema);
// module.exports = mongoose.model("Like", LikeSchema);