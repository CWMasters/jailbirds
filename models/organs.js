const sequalize = require('../config/connection');

// create the model/schema
class organs extends Model {}
      
   organs.init(
      {
          name: {
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
 
 module.exports = organs;
 
