const MealType = require('../Models/MealType.json');  // importing the MealType JSON data

// getMealType function to get all the mealtypes
exports.getMealType = (req, res, next) => {
    res.status(200).json({ message: "MealType Fetched Sucessfully", mealtype: MealType })
}