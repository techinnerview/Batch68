var express = require('express');
const { route } = require('.');
var router = express.Router();
var { addProduct, getAllProducts, getProductByPrice, getProductByCategory, updateProduct, deleteProductByName } = require('../controller/productController');

/* GET users listing. */
router.get('/', getAllProducts);

//First
router.use('/getAllProducts', (req, res, next) => {
    console.log("Middleware for getAllProducts API called - Before")
    next();
})

//Second
router.get('/getAllProducts', getAllProducts);

//Third
router.use('/getAllProducts', (req, res, next) => {
    console.log("Middleware for getAllProducts API called - After")
})

router.post('/addProduct', addProduct);

router.get('/getProductByCategory/:category', getProductByCategory)  //Dynamic Routing

router.get('/getProductByPrice/:price', getProductByPrice)  //Dynamic Routing

router.put('/updateProduct/:category', updateProduct)

router.delete('/deleteProductByName', deleteProductByName)

module.exports = router;
