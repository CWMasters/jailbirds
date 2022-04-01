const {module, DataTypes } = require('sequalize');
const sequalize = require('../config/connection');

// create the model/schema
 class purpose extends Model {}
 
     
  purpose.init(
     {
         id: {
             type: DataTypes.INTEGER,
             allowNull: false,
             primaryKey: true,
             autoIncrement: true
         },
         donor_number: {
             type: DataTypes.STRING,
             allowNull: false
         },
         purpose_id: {
             type: DataTypes.INTEGER,
             allowNull: false
         },
     }       
            
 );  

module.exports = purpose;

