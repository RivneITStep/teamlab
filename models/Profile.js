const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true,
        unique: true
    },
    git: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
