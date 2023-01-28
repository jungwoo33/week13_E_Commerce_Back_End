// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

/* Let's include foreign Keys */
// a Product can only belong to one Category (i.e., a Product cannot belong to two Categories):
// A.belongsTo(B)
Product.belongsTo(Category, {
  foreignKey: 'category_id', // should be defined in "A"
});


// a Category can have multiple Products
// A.hasMany(B)
Category.hasMany(Product, {
  foreignKey: 'category_id', // should be defined in "B"
  onDelete: 'SET NULL',
});

// Products belongToMany Tags (through ProductTag)
// A.belongsToMany(B,{through: 'C'})
Product.belongsToMany(Tag,{
  through: ProductTag,
  foreignKey: 'product_id', // with product_id in ProductTag
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{
  through: ProductTag,
  foreignKey: 'tag_id', // with tag_id in ProductTag
});



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
