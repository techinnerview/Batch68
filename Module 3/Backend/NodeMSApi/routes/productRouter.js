var express = require('express');
const { route } = require('.');
var router = express.Router();
var { addProduct, getAllProducts, getProductByPrice, getProductByCategory, updateProduct, deleteProductByName } = require('../controller/productController');

/* GET users listing. */
router.get('/', getAllProducts);

router.get('/getAllProducts', getAllProducts);

router.post('/addProduct', addProduct);

router.get('/getProductByCategory/:category', getProductByCategory)  //Dynamic Routing

router.get('/getProductByPrice/:price', getProductByPrice)  //Dynamic Routing

router.put('/updateProduct/:category', updateProduct)

router.delete('/deleteProductByName', deleteProductByName)

module.exports = router;
