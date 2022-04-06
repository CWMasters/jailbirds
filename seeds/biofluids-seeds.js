const { biofluids } = require('../models');

const biofluidsData = [

  {
    id: '1',
    biofluids_name: 'plasma',
  },

  { 
    id: '2',
    biofluids_name: 'blood',
  },

  {
    id: '3',
    biofluids_name: 'platelets',
  },

  {
    id: '4',
    biofluids_name: 'CSF',
  },

  {
    id: '0',
    biofluids_name: 'None',
  },
];

const seedBiofluids = () => biofluids.bulkCreate(biofluidsData);
module.exports = seedBiofluids;