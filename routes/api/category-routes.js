const router = require('express').Router();
const { Category, Product } = require('../../models');

// you are in: localhost:3001/api/categories/
// The `/api/categories` endpoint
router.get('/', async(req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const category_data = await Category.findAll({
      include: {
        model: Product, 
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'] // include following columns in Product table
      },      
    });
    res.status(200).json(category_data);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category_data = await Category.findByPk(req.params.id,{
      include: {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'] // include following columns in Product table
      },
    });
    if(!category_data){
      res.status(404).json({message: 'No category found with that id!'});
      return;
    }
    res.status(200).json(category_data);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
