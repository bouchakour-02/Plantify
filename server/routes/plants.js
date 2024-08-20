const express = require('express');
const router = express.Router();
const plantController = require('../controllers/PlantController'); // Ensure this path is correct

// Route to add a new plant
router.post('/add', plantController.addPlant);

// Route to get all plants
router.get('/', plantController.getPlants); // Line 10

// Route to get a single plant by ID
router.get('/:id', plantController.getPlantById);

// Route to update a plant by ID
router.put('/:id', plantController.updatePlant);

// Route to delete a plant by ID
router.delete('/:id', plantController.deletePlant);

module.exports = router;
