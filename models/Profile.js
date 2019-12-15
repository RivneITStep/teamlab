const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
    user_id: {
        type: String,
        require: true
    },
    location: {
        type: String
    },
    skills: [{
        type: [String],
        
    }],
    githubusername: {
        type: String,
        required: true
    },
    experience: [{
        position: {
            type: String,
            
        },
        company: {
            type: String,
           
        },
        location: {
            type: String
        },
        from: {
            type: Date,
            
        },
        to: {
            type: Date
        },
        current: {
            type: Boolean,
            default: false
        },
        description: {
            type: String
        }
    }],
    education: [{
        school: {
            type: String,
            
        },
        degree: {
            type: String,
            
        },
        fieldofstady: {
            type: String,
            
        },
        from: {
            type: Date,
            
        },
        to: {
            type: Date
        },
        current: {
            type: Boolean,
            default: false
        },
        description: {
            type: String
        }
    }],
    social: {
        youtube: {
            type: String
        },
        twitter: {
            type: String
        },
        facebook: {
            type: String
        },
        linkedin: {
            type: String
        },
        instagram: {
            type: String
        },
        phone_number: {
            type: String
        }
    },
    mainimage: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model('Profile', ProfileSchema);
