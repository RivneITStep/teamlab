const User = require('../../models/User');
const Profile = require('../../models/Profile');
const checkValidationErrors = require("../midlleware/checkValidationErrors");
//Controllers
const MsgsController = require("./msgs-controller");

const fetch = require("node-fetch");
const multer = require('multer');
const upload = multer({dest: './public/uploads/'});

function remove_duplicates_es6(arr) {
    let s = new Set(arr);
    let it = s.values();
    return Array.from(it);
}

exports.createProfile=async(req,res)=>{
    try {
        checkValidationErrors(req, res);
        const {
            user_id,
            location,
            githubusername,
            experience,
            education,
            social
        } = req.body;
        let userProfile_from_profile_colections = await Profile.findOne({user_id});
        if (userProfile_from_profile_colections)
        {
            return res.status(500).send(MsgsController.AlreadyExist('Profile for this user Alredy exist'));    
        }
        let skills = {};
        if (req.file) {
            var mainimage = req.file.filename;;
        } else {
            var mainimage = 'default.png';
        }
        let url = "https://api.github.com/users/" + githubusername + "/repos?client_id=796391a0b2d47394dbbf&client_secret=f9d5019a949e1e545cd049e0817e03b20fa55c56";
        var git_response = await fetch(url);
        var git_data = await git_response.json();
        if (!git_data.message) {
            let language = []
            git_data.map((item, key) => {
                language[key] = item.language
            });
            skills = remove_duplicates_es6(language);
            git = githubusername;
        } else {
            return res
                .status(400)
                .json({
                    errors: [{
                        msg: 'git is not response'
                    }]
                });

        }
        const newProfile = new Profile({
            user_id: user_id,
                location: location,
                skills: skills,
                githubusername: githubusername,
                experience: experience,
                education: education,
                social: social,
                mainimage: mainimage
        });
        newProfile
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