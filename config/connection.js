//import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
   sequelize = new Sequelize('spareparts_db', 'root', 'masters2121', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3301
});
}

module.exports = sequelize; 