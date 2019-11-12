const User = require('../models/User');
const Profile = require('../models/Profile');
const checkValidationErrors = require("../midlleware/checkValidationErrors");
//Controllers
const MsgsController = require("./msgs-controller");
const fetch = require("node-fetch");
const multer = require('multer');
const upload = multer({dest: './public/uploads/'});


const remove_duplicates_es6= require("../midlleware/removeDublicate")

exports.getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find().sort({ date: -1 });
    res.status(200).json(profiles);
  } catch (error) {
    console.error(error.message);
    res.status(500).json(MsgsController.ServerError());
  }
};
exports.createProfile=async(req,res)=>{
    try {
        checkValidationErrors(req, res);
        const {
            name,
            id
        } = req.user;
        const user_id=id;
       
        const {
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
                .json(MsgsController.Fail())

        }
        if (education)
        {
            education.map((item)=>{
                if (item.to)
                {
                    item.current = false
                }
                else 
                    {
                        item.current = true
                    }
                if (item.current === true)
                item.to=new Date;
            })
        }
         if (experience)
        {
            education.map((item)=>{
                if (item.to)
                {
                    item.current = false
                }
                else 
                    {
                        item.current = true
                    }
                if (item.current === true)
                item.to=new Date;
            })
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

exports.showProfile = async (req, res) => {
    try {
        checkValidationErrors(req, res);
        const {
            id
        } = req.params;
        const user_id = id;
        let user_from_user_colections = await User.findOne({_id: user_id });
        let userProfile_from_profile_colections = await Profile.findOne({user_id});
        if (!userProfile_from_profile_colections) {
          return res.status(500).send(MsgsController.AlreadyExist('no Profile for this user'));
        }  
        else {
                let repository = [];
                let githubusername = userProfile_from_profile_colections.githubusername;
                let url = "https://api.github.com/users/" + githubusername + "/repos?client_id=796391a0b2d47394dbbf&client_secret=f9d5019a949e1e545cd049e0817e03b20fa55c56";
                var git_response = await fetch(url);
                var git_data = await git_response.json();
                git_data.map((item, key) => {
                    repository[key] = item.url
                })
                let response = {
                    name: user_from_user_colections.name,
                    git_repositories: repository,
                    profile: userProfile_from_profile_colections
                }
                res.json(response);
            }
    } catch (error) {
        console.error(error.message);
         res.status(500).json(MsgsController.ServerError());
    }

};

exports.updateProfile = async (req, res) => {
    try {
        checkValidationErrors(req, res);
        const {
            name,
            id
        } = req.user;
        const user_id = id;
        const {
            location,
            skills,
            githubusername,
            experience,
            education,
            social,
            mainimage
        } = req.body
  
        const editedProfile = {};
        if (location) editedProfile.location = location;
        if (skills) editedProfile.skills = skills;
        if (githubusername) {
            let url = "https://api.github.com/users/" + githubusername + "/repos?client_id=796391a0b2d47394dbbf&client_secret=f9d5019a949e1e545cd049e0817e03b20fa55c56";
            var git_response = await fetch(url);
            var git_data = await git_response.json();
            if (!git_data.message) {
                editedProfile.githubusername = githubusername;
            } else {
                return res
                    .status(400)
                    .json({
                        errors: [{
                            msg: 'git is not response'
                        }]
                    });

            }
        };
        if (experience) {
                    experience.map((item) => {
                    if (item.to) {
                        item.current = false
                    } else {
                        item.current = true
                    }
                    if (item.current === true)
                        item.to = new Date;
                })
            editedProfile.experience = experience;
        }
        if (education) {
            
            education.map((item) => {
                    if (item.to) {
                        item.current = false
                    } else {
                        item.current = true
                    }
                    if (item.current === true)
                        item.to = new Date;
                })
            editedProfile.education = education;
        }
        if (social) editedProfile.social = social;
        if (mainimage) editedProfile.mainimage = mainimage;
        
        Profile.updateOne({
                    user_id
            }, {
            $set: editedProfile
        }, err => {
            if (err) {
                if (err.kind === "ObjectId") {
                    res.status(404).json({
                        msg: "Profile not found"
                    });
                } else res.status(500).send("Operation failed. Server error");
            }
            res.status(201).json(MsgsController.Success());
        });


       
    } catch (error) {
        console.error(error.message);
        res.status(500).json(MsgsController.ServerError());
    }

};