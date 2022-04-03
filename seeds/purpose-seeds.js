const { Purpose } = require('../models');

const purposeData = [

  {
    purpose_name: 'Research',
  },

  { 
    purpose_name: 'Non-Directed Donation',
  },

  {
    purpose_name: 'Pediatric Donation',
  },

  {
    purpose_name: 'Paired Donation',
  },

  {
    purpose_name: 'Directed Donation',
  },

  {
    purpose_namee: 'Tissue Donation',
  },
];

const seedPurpose = () => Purpose.bulkCreate(purposeData);
modeule.exports = seedPurpose;

