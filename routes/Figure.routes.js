express = require('express');
const Figure = require('../models/Figure');
const router = express.Router();


router.post('/create', async (req, res) => {
  try {
    const {name, img, price, description} = req.body
    const newitem = await Figure.create( {name, img, price, description})

   
    res.json(newitem);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }

});

router.get('/figures', async (req, res) => {
  try {
    const newitem = await Figure.find( )
    res.json(newitem);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
})

module.exports = router;