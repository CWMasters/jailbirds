const {module, DataTypes } = require('sequalize');
// const bcrypt = require('bcrypt);
// const sequalize = require('../config/connection');

// create the model/schema
 class Donors extends Model {
   //check password
   checkPassword(loginPW) {
       return bcrypt.compareSync(loginPW, this.password);
   }
 }
     
  Donors.init(
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
         email: {
             type: DataTypes.STRING,
             allowNull: false,
             unique: true,
             validate: {
              isEmail: true
             }
         },
          password: {
             type: DataTypes.STRING,
             allowNull: false,
             validate: {
             len: [4]
             }
         }
     },    
            
    /*
    
    Users.init(
     {
         id: {
             type: DataTypes.INTEGER,
             allowNull: false,
             primaryKey: true,
             autoIncrement: true
         },
         donor_number: {
             type: DataTypes.STRING,
             allowNull: true                  if they are a medical professional, are they assigned a "donor number?"
         },
         username: {
             type: DataTypes.STRING,
             allowNull: false                 should we make two separate models? one for donors and one for users?
         },
         purpose_id: {
             type: DataTypes.INTEGER,
             allowNull: false
         },
         email: {
             type: DataTypes.STRING,
             allowNull: false,
             unique: true,
             validate: {
              isEmail: true
             }
         },
          password: {
             type: DataTypes.STRING,
             allowNull: false,
             validate: {
             len: [4]
             }
         }
     },     */     




);  

module.exports = Donors;

// Still need to add email and password