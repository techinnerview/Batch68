var express = require('express');
var router = express.Router();
var { getAllProducts, addProduct, defaultProduct } = require('../controller/productsController');

/* GET users listing. */
router.get('/', function (req, res, next) {
    defaultProduct(req, res, next);
});

router.get('/getAllProducts', function (req, res, next) {
    getAllProducts(req, res, next);
});

router.post('/addProduct', function (req, res, next) {
    addProduct(req, res, next);
});

module.exports = router;
