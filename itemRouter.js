const express = require('express')
const router = express.Router()
const Item = require('./item')

router.post('/items',async (req, res) => {
    const item=new Item({
        id:req.body.id,
        stock:req.body.stock,
        price:req.body.price
      })
      try{
        const newItem=await item.save()
        res.status(201).json(newItem)

      }catch(err){
        res.status(400).json({message:err.message})
      }
  });

  router.get('/', async (req, res) => {
    try {
      const items = await Item.find();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving items' });
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const item = await Item.findById(req.params.itemId);
      if(!item){
        res.status(404).json({message:"ITEM NOT FOUND"})
      }
      else{
      res.json(items);
      }
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving items' });
    }
  });

  //UPDATE AN ID
router.put('/:itemId', async (req, res) => {
    try {
      const { name, material } = req.body;
      const updatedItem = await Item.findByIdAndUpdate(
        req.params.itemId,
        { name, material },
        { new: true }
      );
      if (!updatedItem) {
        return res.status(404).json({ error: 'Item not found' });
      }
      res.json(updatedItem);
    } catch (error) {
      res.status(500).json({ error: 'Error updating item' });
    }
  });
  
  // Delete  by ID
  router.delete('/:itemId', async (req, res) => {
    try {
      const deletedItem = await Item.findByIdAndRemove(req.params.itemId);
      if (!deletedItem) {
        return res.status(404).json({ error: 'Item not found' });
      }
      res.json({ message: 'Item deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error deleting item' });
    }
  });
  

module.exports = router;
