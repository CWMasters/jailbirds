const biofluids = require('./biofluids');
const users = require('./users');
const organs = require('./organs');
const purpose = require('./purpose');

// Organs belongsTo Users
organs.belongsTo(users, {
    foreignKey: 'donor_id',
  });
  
  // Categories have many Products
  users.hasMany(organs, {
    foreignKey: 'donor_id',
  })
  
 // Organs belongsTo Users
biofluids.belongsTo(users, {
    foreignKey: 'donor_id',
  });
  
  
  purpose.belongsToMany(users, {
      through: {
        model: users,
       foreignKey: 'donor_id'
      }
  }) 
  

module.exports = { users, organs, biofluids, purpose };