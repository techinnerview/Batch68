var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getAllUsers', function(req, res, next) {
  res.send('respond with a All Users');
});
module.exports = router;
