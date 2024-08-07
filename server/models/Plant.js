const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema({
    name: String,
    species: String,
    careInstructions: String,
    climate: String,
    growthRequirements: String,
});

module.exports = mongoose.model('Plant', PlantSchema);
