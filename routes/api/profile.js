
var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');


router.get('/',(req, res, next)=>
{ 
  
  res.send("conected");
});
router.post('/',[check('git').isEmail()], function(req, res, next) {
  const errors= validationResult(req);
  if (errors.isEmpty())
  {
    console.log(errors)
  }
  else
  {
    console.log('not ok')
  }
  res.send(req.body);
});
module.exports = router;