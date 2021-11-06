// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// **Hint**: Make sure you set up foreign key relationships that match the column we created in the respective models.
//set up associations- read the docs 
// set up FK in proper tables 

// * `Product` belongs to `Category`, as a category can have multiple products but a product can only belong to one category.
Product.belongsTo(Category, {
  foreignKey: 
});
// * `Category` has many `Product` models.
Category.hasMany(Product)
// * `Product` belongs to many `Tag` models. Using the `ProductTag` through model, allow products to have multiple tags and tags to have many products.
Product.belongsToMany(ProductTag, { through: 'product_tag'})

// * `Tag` belongs to many `Product` models.
Tag.belongsToMany(Product)

// Products belongsTo Category
Product.belongsTo(Category)
// Categories have many Products
Category.hasMany(Product)
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {through: 'product_tag'})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {through: 'product_tag'})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
