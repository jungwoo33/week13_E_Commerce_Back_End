const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);   // calling ./category-routes.js
router.use('/products', productRoutes);      // calling ./product-routes.js
router.use('/tags', tagRoutes);              // calling ./tag-routes.js

module.exports = router;
