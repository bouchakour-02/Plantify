const Plant = require('../models/Plant');

// Add a new plant
exports.addPlant = async (req, res) => {
  const { name, species, careInstructions } = req.body;

  try {
    const newPlant = new Plant({
      name,
      species,
      careInstructions,
    });

    const savedPlant = await newPlant.save();
    res.json(savedPlant);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get all plants
exports.getPlants = async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get a single plant by ID
exports.getPlantById = async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);
    if (!plant) {
      return res.status(404).json({ msg: 'Plant not found' });
    }
    res.json(plant);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update a plant by ID
exports.updatePlant = async (req, res) => {
  const { name, species, careInstructions } = req.body;

  try {
    let plant = await Plant.findById(req.params.id);

    if (!plant) {
      return res.status(404).json({ msg: 'Plant not found' });
    }

    plant.name = name || plant.name;
    plant.species = species || plant.species;
    plant.careInstructions = careInstructions || plant.careInstructions;

    const updatedPlant = await plant.save();
    res.json(updatedPlant);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete a plant by ID
exports.deletePlant = async (req, res) => {
    try {
      const plant = await Plant.findById(req.params.id);
  
      if (!plant) {
        return res.status(404).json({ msg: 'Plant not found' });
      }
  
      await Plant.deleteOne({ _id: req.params.id }); // Updated from plant.remove()
  
      res.json({ msg: 'Plant removed' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };
  
