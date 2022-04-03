const { organs } = require('../models');

const organsData = [

  {
    organs_name: 'heart',
  },

  { 
    organs_name: 'brain',
  },

  {
    organs_name: 'kidney',
  },

  {
    organs_name: 'liver',
  },

  {
    organs_name: 'spleen',
  },

  {
    organs_name: 'lungs',
  },

  {
    organs_name: 'intestines',
  },

  
];

const seedOrgans = () => organs.bulkCreate(organsData);
modeule.exports = seedOrgans;