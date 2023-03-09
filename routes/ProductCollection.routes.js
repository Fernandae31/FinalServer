const express = require('express');
const ProductCollection = require('../models/ProductCollection');
const Order = require('../models/Order')
const router = express.Router();


router.post('/create', async (req, res) => {
   try {
  
    const  {name, img, price, description} = req.body
    
    const newitem = await ProductCollection.create( {name, img, price, description})
   
    res.json(newitem);
   } catch (err) {
   console.error(err);
   res.status(500).send('Server Error');
   }
});
router.get('/products', async (req, res) => {
try {
  const newitem = await ProductCollection.find( )
  res.json(newitem);
} catch (err) {
  console.error(err);
  res.status(500).send('Server Error');
}
});
router.get('/getBy/:id', async (req, res) => {
  try {
    const {id} = req.params
    const newitem = await ProductCollection.findById( id)
    
    res.json(newitem);
    
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
  });
router.put('/edit/:id', async (req, res) => {
  try {
 
   const  {name, img, price, description} = req.body
   const {id} = req.params
   
   const newitem = await ProductCollection.findByIdAndUpdate(id, {name, img, price, description})
  
   res.json(newitem);
  } catch (err) {
  console.error(err);
  res.status(500).send('Server Error');
  }
});
router.delete('/delete/:id', async (req, res) => {
  try {
 
    const {id} = req.params
   const deleteitem = await ProductCollection.findByIdAndRemove(id)
    
   res.json(deleteitem);
  } catch (err) {
  console.error(err);
  res.status(500).send('Server Error');
  }
});
router.post('/orders', async (req, res) => {
  try {
 
   const  {name, description, address, number} = req.body
   
   const newitem = await Order.create( {name, description, address, number})
  
   res.json(newitem);
  } catch (err) {
  console.error(err);
  res.status(500).send('Server Error');
  }
});

module.exports = router;