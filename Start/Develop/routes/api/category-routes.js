const router = require('express').Router();
const { Category, Product, Tag, ProductTag } = require('../../models');
// whenever we require a folder, it looks for the index 

// The `/api/categories` endpoint
// find all categories
  // be sure to include its associated Products
  router.get('/', async (req, res) => {
    try {
     const categoryData = await Category.findAll({
       include: [
         {model: Product,
         as: "products"}],
     });
     res.status(200).json(categoryData);
   } catch (err) {
     res.status(500).json(err);
   }
 });

  // find one category by its `id` value
  // be sure to include its associated Products
  router.get('/:id', async (req, res) => {
    try {
      const categoryData = await Category.findByPk(req.params.id, {
        include: [
          {model: Product,
          as: "products"}],
      });
  
      if (!categoryData) {
        res.status(404).json({ message: `No category found with id: ${req.params.id}!`})
        return;
      }
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // create a new category
  router.post('/', async (req, res) => {
    try {
      const categoryData = await Category.create(req.body);
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  // update a category by its `id` value
  router.put('/:id', async (req, res) => {
    try {
      const categoryData = await Category.update(req.body, {
        where: {
          id: req.params.id, 
        },
      });
      if (!categoryData) {
        res.status(404).json({ message: `No category found with id: ${req.params.id}!`})
        return;
      } else {
      res.json(categoryData);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // delete a category by its `id` value
  router.delete('/:id', async (req, res) => {
    try {
      const categoryData = await Category.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!categoryData) {
        res.status(404).json({ message: `No category found with id: ${req.params.id}!`})
        return;
      }
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports = router;
