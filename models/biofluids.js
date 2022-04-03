const { Model, DataTypes } = require('sequelize');
const sequalize = require('../config/connection');

// create the model/schema
class biofluids extends Model {}
      
   biofluids.init(
      {
          fluid: {
              type: DataTypes.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
          },
          donor_id: {
              type: DataTypes.STRING,
              allowNull: false,
              references: {
                 model: 'users',
                 key: 'donor_number'
            }
          },
          purpose_id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              references: {
                 model: 'users',
                 key: 'donor_number'
            }
          },
 
     }     
  
             
);  
 
 module.exports = biofluids;
 