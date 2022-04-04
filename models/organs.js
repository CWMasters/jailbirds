const { Model, DataTypes } = require('sequelize');
const sequalize = require('../config/connection');

// create the model/schema
class organs extends Model {}
      
organs.init(
    {

       id: {
       type: DataTypes.INTEGER,
       allowNull: false,
       primaryKey: true,
       autoIncrement: true
       },


       organs_name: {
       type: DataTypes.STRING,
       allowNull: false,
       }
   },
   {
       sequelize,
       timestamps: false,
       freezeTableName: true,
       underscored: true,
       modelName: 'organs',
 }

  

           
);   
  
              
 
 module.exports = organs;
 
