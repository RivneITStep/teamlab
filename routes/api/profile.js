
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const urlecodedParser = bodyParser.urlencoded({extended: false});

router.get('/',(req, res, next)=>
{ 
  
  res.send("conected");
});
router.post('/?id', urlecodedParser,function(req, res, next) {

console.log(req.params.id);
const p = req.body
res.send(p);


});
module.exports = router;