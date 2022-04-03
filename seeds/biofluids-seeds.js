const { biofluids } = require('../models');

const biofluidsData = [

  {
    biofluids_name: 'plasma',
  },

  { 
    biofluids_name: 'blood',
  },

  {
    biofluids_name: 'platelets',
  },

  {
    biofluids_name: 'CSF',
  },

  {
    biofluids_name: 'None',
  },
];

const seedBiofluids = () => biofluids.bulkCreate(biofluidsData);
modeule.exports = seedBiofluids;