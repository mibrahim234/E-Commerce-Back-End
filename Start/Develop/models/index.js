// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// * `Product` belongs to `Category`, as a category can have multiple products but a product can only belong to one category.

// * `Category` has many `Product` models.

// * `Product` belongs to many `Tag` models. Using the `ProductTag` through model, allow products to have multiple tags and tags to have many products.

// * `Tag` belongs to many `Product` models.

// **Hint**: Make sure you set up foreign key relationships that match the column we created in the respective models.


// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
