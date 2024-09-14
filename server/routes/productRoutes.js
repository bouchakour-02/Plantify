// routes/productRoutes.js
const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET products on sale
router.get('/sale', async (req, res) => {
  try {
    const saleProducts = await Product.find({ sale: true });
    res.json(saleProducts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create a new product
router.post('/', async (req, res) => {
  const { name, price, oldPrice, imageUrl, inStock, discount, category, sale } = req.body;

  const newProduct = new Product({
    name,
    price,
    oldPrice,
    imageUrl,
    inStock,
    discount,
    category,
    sale
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// Get recommended products excluding one
router.get('/recommended/:excludeId', async (req, res) => {
  try {
    const excludeId = req.params.excludeId;

    // Fetch all products excluding the one with the provided id
    const recommendedProducts = await Product.aggregate([
      { $match: { _id: { $ne: mongoose.Types.ObjectId(excludeId) } } },
      { $sample: { size: 3 } }, // Randomly select 3 products
    ]);

    res.json(recommendedProducts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});
module.exports = router;
