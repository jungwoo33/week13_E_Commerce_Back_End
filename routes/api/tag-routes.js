const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tag_data = await Tag.findAll({
      include: [{model: Product}], // include everything in "product" table
    });
    res.status(200).json(tag_data);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag_data = await Tag.findByPk(req.params.id,{
      include: [{model: Product}],
    });
    if(!tag_data){
      res.status(404).json({message: 'No tag found with that id!'});
      return;
    }
    res.status(200).json(tag_data);
  } catch(err) {
    res.status(500).json(err);
  }
});

// create a new tag
router.post('/', async (req, res) => {
  try{
    const user_data = await Tag.create(req.body);
    // 200 status code means the request is successful
    res.status(200).json(user_data);
  } catch(err) {
    // 400 status code means the server could not understand the request
    res.status(400).json(err);
  }  
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try{
    const user_data = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if(!user_data){
      res.status(404).json({message: 'No category found with that id!'});
      return;
    }
    res.json(user_data);
  } catch(err){
    res.json(err);
  }  
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try{
    const user_data = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if(!user_data){
      res.status(404).json({message: 'No tag found with that id!'});
      return;
    }
    res.json(user_data);
  } catch(err){
    res.json(err);
  }  
});

module.exports = router;
