// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// `Product`

//   * `id`
//     * Integer
//     * Doesn't allow null values
//     * Set as primary key
//     * Uses auto increment

//   * `product_name`
//     * String
//     * Doesn't allow null values

// * `price`
//     * Decimal
//     * Doesn't allow null values
//     * Validates that the value is a decimal

//   * `stock`
//     * Integer
//     * Doesn't allow null values
//     * Set a default value of 10
//     * Validates that the value is numeric

//   * `category_id`
//     * Integer
//     * References the `category` model's `id` 

// set up fields and rules for Product model
    // define columns
Product.init(
  {
    // define an id column
    id: {
      // use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.INTEGER,
      // this is the equivalent of SQL's `NOT NULL` option
      allowNull: false,
      // instruct that this is the Primary Key
      primaryKey: true,
      // turn on auto increment
      autoIncrement: true
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
