const { organs } = require('../models');

const organsData = [

  {
    id: '1',
    organs_name: 'heart',
  },

  { 
    id: '2',
    organs_name: 'brain',
  },

  {
    id: '3',
    organs_name: 'kidney',
  },

  {
    id: '4',
    organs_name: 'liver',
  },

  {
    id: '5',
    organs_name: 'spleen',
  },

  {
    id: '6',
    organs_name: 'lungs',
  },

  {
    id: '7',
    organs_name: 'intestines',
  },

  
];

const seedOrgans = () => organs.bulkCreate(organsData);
modeule.exports = seedOrgans;