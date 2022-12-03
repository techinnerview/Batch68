var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('I am authenticating whether the user is valid or not');
});

module.exports = router;