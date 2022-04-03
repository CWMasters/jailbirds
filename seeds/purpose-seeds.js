const { Purpose } = require('../models');

const purposeData = [

  {
    id: '1',
    purpose_name: 'Research',
  },

  { 
    id: '2',
    purpose_name: 'Non-Directed Donation',
  },

  {
    id: '3',
    purpose_name: 'Pediatric Donation',
  },

  {
    id: '4',
    purpose_name: 'Paired Donation',
  },

  {
    id: '5',
    purpose_name: 'Directed Donation',
  },

  {
    id: '6',
    purpose_namee: 'Tissue Donation',
  },
];

const seedPurpose = () => Purpose.bulkCreate(purposeData);
modeule.exports = seedPurpose;

