var express = require('express');
var router = express.Router();
var { getAllOrders } = require('../controller/orderController');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('I am the default API for Orders');
});
router.get('/getAllOrders', function (req, res, next) {
    getAllOrders(req, res, next);
});


module.exports = router;