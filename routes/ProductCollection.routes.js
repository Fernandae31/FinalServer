const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// POST /api/products
router.post('/', async (req, res) => {
  try {
    // Create a new product instance from the request body
    const product = new Product(req.body);
    // Save the product to the database
    await product.save();
    // Send the saved product back as the response
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;