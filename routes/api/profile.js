
var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const Profile = require('../../models/Profile');
const fetch = require("node-fetch");

router.get('/',(req, res, next)=>
{ 
  
  res.send("conected");
});
router.post('/', async(req, res, next)=> {
  
  console.log(req.body);
  let url = "https://api.github.com/users/" + req.body.git + "/repos?client_id=796391a0b2d47394dbbf&client_secret=f9d5019a949e1e545cd049e0817e03b20fa55c56";
  var git_response = await fetch(url);
  var git_data = await git_response.json();
  const data= git_data.map((item)=>{console.log(item.id); return item.id})
  
  // console.log(git_data.message);
  res.send(git_data);
  // https: //github.com/valeryho
  
  // const errors= validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({
  //     errors: errors.array()
  //   });
  // }
  // console.log(url);
  // // console.log(response);
  //  console.log(git_result);

});
module.exports = router;