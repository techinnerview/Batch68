const express = require('express');

// importing all the controllers components 
var cityController = require('../Controllers/City');
var mealTypeController = require('../Controllers/MealType');
var restaurantController = require('../Controllers/Restaurant');

// Initializing the express router 
const router = express.Router();

// registering of all the routes
router.get('/cityList', cityController.getCityList);
router.get('/getRestaurantsbycity', restaurantController.getRestaurantByCity);
router.get('/mealtype', mealTypeController.getMealType);
router.get('/getResById/:resId', restaurantController.getRestaurantById);

module.exports = router; // export the router