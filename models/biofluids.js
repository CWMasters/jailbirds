const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create the model/schema
class biofluids extends Model {}
      
   biofluids.init(
      {

         id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
         },


         biofluid_name: {
         type: DataTypes.STRING,
         allowNull: false,
         }
     },
     {
         sequelize,
         timestamps: false,
         freezeTableName: true,
         underscored: true,
         modelName: 'biofluids',
   }

    
  
             
);  
 
 module.exports = biofluids;
 