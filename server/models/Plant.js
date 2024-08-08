const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    careInstructions: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Plant', PlantSchema);
