var productSchema = require('../model/productModel');

addProduct = (req, res, next) => {
    var productToAdd = new productSchema({
        productName: req.body.productName,
        productCategory: req.body.productCategory,
        price: req.body.price,
        color: req.body.color
    })
    productToAdd.save((err, response) => {
        if (err)
            res.send({ "message": "Exception Occurred", "error": err })
        else
            res.send({ "Status": "200", "response": response });
    });
    
}

getAllProducts = (req, res, next) => {
    productSchema.find((err, response) => {
        if (err)
            res.send({ "message": "Exception Occurred", "response": err })
        else
            res.send({ "status": "200", "response": response });

            const result = response.filter((item) => {
                return item.price <= req.body.price && 
                item.category === req.body.category
            })
            if(req.bosy.sortOption === 'ascending'){
                result.sort();
            }
            res.send(result);
    })
    next();
}

getProductByCategory = (req, res, next) => {
    productSchema.find({ "productCategory": req.params.category }, (err, response) => {
        if (err)
            res.send({ "message": "Exception Occurred", "response": err })
        else
            res.send({ "status": "200", "response": response });
    })
}

getProductByPrice = (req, res, next) => {
    productSchema.find({ "price": req.params.price }, (err, response) => {
        if (err)
            res.send({ "message": "Exception Occurred", "response": err })
        else
            res.send({ "status": "200", "response": response });
    })
}

updateProduct = (req, res, next) => {
    productSchema.updateMany({ "productCategory": req.params.category }, { "price": req.body.price }, (err, response) => {
        if (err)
            res.send({ "message": "Exception Occurred", "response": err })
        else
            res.send({ "status": "200", "response": response });
    })
}

deleteProductByName = (req, res, next) => {
    productSchema.remove({ "productName": req.query.name }, (err, response) => {
        if (err)
            res.send({ "message": "Exception Occurred", "response": err })
        else
            res.send({ "status": "200", "response": response });
    })
}

module.exports = { addProduct, getAllProducts, getProductByCategory, getProductByPrice, updateProduct, deleteProductByName }