const Product = require('../models/Product');

// Get products on sale (filtering by discount)
exports.getSaleProducts = async (req, res) => {
  try {
    // Find all products where discount is greater than 0
    const products = await Product.find({ discount: { $gt: 0 } });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
