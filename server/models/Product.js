const mongoose = require('mongoose');

// Define the Product Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  oldPrice: { type: Number }, // Old price if the product is on sale
  discount: { type: Number }, // Discount percentage
  inStock: { type: Boolean, required: true },
  imageUrl: { type: String, required: true }, // URL of the product image
  categories: { type: [String], required: true }, // Categories like "Soil Care", "Garden Beds", etc.
  description: { type: String },
});

// Create the Product model using the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
