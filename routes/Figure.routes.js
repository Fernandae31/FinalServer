express = require('express');
const Figure = require('../models/Figure');
const router = express.Router();


router.post('/create', async (req, res) => {
  try {
 
   const  {name, img, price, description} = req.body
   
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
});
router.get('/getBy/:id', async (req, res) => {
 try {
   const {id} = req.params
   const newitem = await Figure.findById( id)
   
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
  
  const newitem = await Figure.findByIdAndUpdate(id, {name, img, price, description})
 
  res.json(newitem);
 } catch (err) {
 console.error(err);
 res.status(500).send('Server Error');
 }
});
router.delete('/delete/:id', async (req, res) => {
 try {

   const {id} = req.params
  const deleteitem = await Figure.findByIdAndRemove(id)
   
  res.json(deleteitem);
 } catch (err) {
 console.error(err);
 res.status(500).send('Server Error');
 }
});

module.exports = router;