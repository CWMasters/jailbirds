const {module, DataTypes } = require('sequalize');
const sequalize = require('../config/connection');

// create the model/schema
 class purpose extends Model {}
 
     
 organs.init(
    {

       id: {
       type: DataTypes.INTEGER,
       allowNull: false,
       primaryKey: true,
       autoIncrement: true
       },


       purpose_name: {
       type: DataTypes.STRING,
       allowNull: false,
       }
   },
   {
       sequelize,
       timestamps: false,
       freezeTableName: true,
       underscored: true,
       modelName: 'purpose',
 }

  

           
);    

module.exports = purpose;

