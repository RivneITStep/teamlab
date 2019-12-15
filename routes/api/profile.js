
var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const Profile = require('../../models/Profile');
//Midllewares
const checkToken = require("../../midlleware/checkToken");
const checkRolle = require("../../midlleware/checkRolle");
//Controllers
const MsgsController = require("../../controllers/msgs-controller");
const ProfileController = require('../../controllers/profile_controller');
const fetch = require("node-fetch");



router.post('/add', 
checkToken,
ProfileController.createProfile
);

router.get('/show_single_profile/:id',
ProfileController.showProfile
);
router.get('/',
  ProfileController.getAllProfiles
);

router.put('/edit',
checkToken,
ProfileController.updateProfile
  );



module.exports = router;