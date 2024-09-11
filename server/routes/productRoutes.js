const express = require('express');
const { getSaleProducts } = require('../controllers/productController');

const router = express.Router();

// Sale products route
router.get('/sale', getSaleProducts);

module.exports = router;
