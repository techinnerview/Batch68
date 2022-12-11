var mongoose = require('mongoose');

const productSchema = mongoose.Schema([{
    productName: String,
    productCategory: String,
    price: String,
    color: String
}]);

var products = mongoose.model("products", productSchema);

module.exports = products;