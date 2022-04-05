const seedUsers = require('./users-seeds');
const seedPurpose = require('./purpose-seeds');
const seedOrgans = require('./organ-seeds');
const seedBiofluids = require('./biofluids-seeds');

const sequalize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- CATEGORIES SEEDED -----\n');
  
    await seedPurpose();
    console.log('\n----- PRODUCTS SEEDED -----\n');
  
    await seedOrgans();
    console.log('\n----- TAGS SEEDED -----\n');
  
    await seedBiofluids();
    console.log('\n----- PRODUCT TAGS SEEDED -----\n');
  
    process.exit(0);
  };
  
  seedAll();