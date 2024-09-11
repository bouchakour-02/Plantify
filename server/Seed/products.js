const mongoose = require('mongoose');
const Product = require('../models/Product');

// Connect to MongoDB
mongoose.connect('your-mongodb-url', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Sample products data
const products = [
  {
    name: "Epic 1020 Universal Bottom Tray",
    price: 7.49,
    oldPrice: 9.99,
    discount: 25,
    inStock: true,
    imageUrl: "https://example.com/path-to-image.jpg",
    categories: ["Garden Beds", "Soil Care"],
    description: "A universal tray for your gardening needs."
  },
  {
    name: "Epic Grow Bags - Lined",
    price: 16.49,
    oldPrice: 21.99,
    discount: 25,
    inStock: true,
    imageUrl: "https://example.com/path-to-image2.jpg",
    categories: ["Planters", "Sale"],
    description: "Durable grow bags perfect for container gardening."
  },
  // Add more sample products...
];

// Insert products into the database
Product.insertMany(products)
  .then(() => {
    console.log('Products added successfully');
    mongoose.connection.close();
  })
  .catch(err => console.error(err));
