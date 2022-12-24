const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Registering the MealType Schema
const MealTypeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    meal_type: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('MealType', MealTypeSchema);  // exporting the model