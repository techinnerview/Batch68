var productSchema = require("../models/productsModel")

getAllProducts = (req, res, next) => {
    try{
        productSchema.find((err, response) => {
            if (err)
                res.send(err);
            else
                res.send(response);
        });
    }
    catch(e) {
        console.log(e);
    }
}

addProduct = (req, res, next) => {
    var productToAdd = {
        productName: req.body.productName,
        productCategory: req.body.productCategory,
        price: req.body.price
    }
    res.send(productToAdd);
}


defaultProduct = (req, res, next) => {
    res.send('I am the default API for Product');
}

module.exports = { getAllProducts, addProduct, defaultProduct }