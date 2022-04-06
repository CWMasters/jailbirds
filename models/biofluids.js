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


         biofluids_name: {
         type: DataTypes.STRING,
         allowNull: false,
         },

         users_id: {
          type: DataTypes.INTEGER,
          references: {
             models: 'users',
             key: 'id'
          }

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
 
 