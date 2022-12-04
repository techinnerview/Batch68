getAllProducts = (req, res, next) => {
    const product = [
        {
            "id": "6360",
            "name": "Gulab",
            "city": "Delhi",
            "locality": "Pitampura, New Delhi",
            "thumb": "https://b.zmtcdn.com/data/pictures/chains/3/6303/640252389ddc3f264dd0e9f2741e73cd.jpg",
            "aggregate_rating": 4.5,
            "rating_text": "Very Good",
            "min_price": 230
        },
        {
            "id": "307406",
            "name": "Pandit Ji Parantha Hut",
            "locality": "Ashok Vihar Phase 2",
            "city": "Delhi",
            "thumb": "https://b.zmtcdn.com/data/pictures/5/19295175/231f0337cd9140f230d8208ddde923c9.jpg",
            "aggregate_rating": 2.5,
            "rating_text": "Very Good",
            "min_price": 530
        }
    ]
    console.log(req.body)
    res.send(product);
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