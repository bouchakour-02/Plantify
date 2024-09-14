const mongoose = require('mongoose');

// Define the Product Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },  // Product name
  price: { type: Number, required: true },  // Current price
  oldPrice: { type: Number },               // Old price (for sale items)
  discount: { type: Number },               // Discount percentage (for sale items)
  inStock: { type: Boolean, required: true }, // Stock status
  imageUrl: { type: String, required: true }, // URL of product image
  categories: { type: [String], required: true }, // Product categories
  description: { type: String },            // Product description
  sale: { type: Boolean, default: false },  // Boolean to indicate if it's on sale
});

// Virtual field to calculate the discounted price, if on sale
productSchema.virtual('discountedPrice').get(function () {
  if (this.sale && this.discount) {
    return this.price - (this.price * (this.discount / 100));
  }
  return this.price;
});

// Create the Product model using the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
