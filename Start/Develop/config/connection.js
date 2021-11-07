require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  // going into env file looking for these 3
  // ?, : is like an if/else statement-- terinary expression
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
     // im using my localhost
    host: 'localhost',
      // we will speak with
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
// exporting this b/c i want to use it in other files
