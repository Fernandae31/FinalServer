express = require('express');
const router = express.Router();
const Figure = require('../models/Figure');

// POST /api/figures
router.post('/', async (req, res) => {
  try {
    // Create a new figure instance from the request body
    const figure = new Figure(req.body);
    // Save the figure to the database
    await figure.save();
    // Send the saved figure back as the response
    res.json(figure);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;