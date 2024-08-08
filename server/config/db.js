const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    console.log('MONGO_URI:', process.env.MONGO_URI); // Log the URI to ensure it's being read correctly
    console.log('Connecting to MongoDB saha saha !.!');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
