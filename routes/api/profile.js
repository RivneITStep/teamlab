
var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');
const Profile = require('../../models/Profile');
const fetch = require("node-fetch");
const multer = require('multer');
const upload = multer({dest: './public/uploads/'});


function remove_duplicates_es6(arr) {
  let s = new Set(arr);
  let it = s.values();
  return Array.from(it);
}

router.get('/',(req, res, next)=>
{ 
  
  res.send("conected");
});

router.post('/add', 
// [check().isEmpty().isURL()],
 async (req, res, next) => {
const errors = validationResult(req);

const {user_id,
      location,
      githubusername,
      experience,
      education,
      social
      } = req.body;
let skills={};
let git='';

    if (req.file) {
      var mainimage = req.file.filename;;

    } else {
      var mainimage = 'default.png';
    }
  let url = "https://api.github.com/users/" + githubusername + "/repos?client_id=796391a0b2d47394dbbf&client_secret=f9d5019a949e1e545cd049e0817e03b20fa55c56";
  var git_response = await fetch(url);
  var git_data = await git_response.json(); 
  if (!git_data.message){
      let language=[]
      git_data.map((item,key)=>{language[key]=item.language});
      skills = remove_duplicates_es6(language);
      git = githubusername;
    }
    else
    {
      return res
        .status(400)
        .json({
          errors: [{msg: 'git is not response'}]
        });

    }
 if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }
  else
  {
      profile = new Profile({
      user_id:user_id,
      location:location,
      skills:skills,
      githubusername:githubusername,
      experience:experience,
      education:education,
      social:social,
      mainimage: mainimage
    });
    await profile.save();
    res.send('saved');
  }
});

router.post('/show',
    // [check().isEmpty().isURL()],
    
    async (req, res, next) => {
        let {user_id} = req.body;
        try{
          let user_from_user_colections = await User.findOne({_id:user_id});
          let userProfile_from_profile_colections = await Profile.findOne({user_id});
          const errors = validationResult(req);
          if (!user_from_user_colections)
          {
            return res
              .status(400)
              .json({  errors: [{msg: 'no such user by id'}]}) 
          }
          else {
                if(!userProfile_from_profile_colections)
                {
                  return res
                    .status(400)
                    .json({  errors: [{msg: 'no such user profile  by id'}]}) 
                }
                else
                {
                  let repository=[];
                  let githubusername = userProfile_from_profile_colections.githubusername;
                  let url = "https://api.github.com/users/" + githubusername + "/repos?client_id=796391a0b2d47394dbbf&client_secret=f9d5019a949e1e545cd049e0817e03b20fa55c56";
                  var git_response = await fetch(url);
                  var git_data = await git_response.json();
                  git_data.map((item,key)=>{repository[key]=item.url})
                  let response = {
                    name: user_from_user_colections.name,
                    git_repositories: repository,
                    profile: userProfile_from_profile_colections
                  }
                  res.json(response);
                }

              }
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server error');
        }
     
  });



module.exports = router;