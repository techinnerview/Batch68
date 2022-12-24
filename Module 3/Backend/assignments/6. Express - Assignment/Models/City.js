const mongoose = require('mongoose');

// Initialising the mongoose Schema
const Schema = mongoose.Schema;

// Registering the City Schema
const CitySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    city_id: {
        type: String
    },
    location_id: {
        type: String
    },
    country_name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('City', CitySchema);   // exporting the model 