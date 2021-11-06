const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}
// CREATE TABLE ProductTag (
// id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
// product_id INTEGER FOREIGN KEY references product(id)
// 
//  )
    // define columns
ProductTag.init(
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
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'product',
      key: 'id'
    }
  },
  tag_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'tag',
      key: 'id'
    }
  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
