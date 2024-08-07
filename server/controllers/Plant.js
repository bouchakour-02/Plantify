// server/controllers/plantController.js
const Plant = require('../models/Plant');

exports.createPlant = async (req, res) => {
    try {
        const newPlant = new Plant(req.body);
        const plant = await newPlant.save();
        res.status(201).json(plant);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getPlants = async (req, res) => {
    try {
        const plants = await Plant.find();
        res.status(200).json(plants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getPlantById = async (req, res) => {
    try {
        const plant = await Plant.findById(req.params.id);
        if (!plant) return res.status(404).json({ message: 'Plant not found' });
        res.status(200).json(plant);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updatePlant = async (req, res) => {
    try {
        const plant = await Plant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!plant) return res.status(404).json({ message: 'Plant not found' });
        res.status(200).json(plant);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deletePlant = async (req, res) => {
    try {
        const plant = await Plant.findByIdAndDelete(req.params.id);
        if (!plant) return res.status(404).json({ message: 'Plant not found' });
        res.status(200).json({ message: 'Plant deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
