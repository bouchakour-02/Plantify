const express = require('express');
const router = express.Router();
const {
    createPlant,
    getPlants,
    getPlantById,
    updatePlant,
    deletePlant
} = require('../controllers/PlantController');

router.post('/', createPlant);
router.get('/', getPlants);
router.get('/:id', getPlantById);
router.put('/:id', updatePlant);
router.delete('/:id', deletePlant);

module.exports = router;
