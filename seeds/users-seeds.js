const { Users } = require('../models');

const UsersData = [

     {
         Donor_id: '2343',
         organ_name: 'brain',
         biofluids_name: 'CSF',
         purpose_name: 'Research',
     },

     {
        Donor_id: '9456',
        organ_name: 'Heart',
        biofluids_name: 'blood',
        purpose_name: 'Tissue Donation',
    },

    {
        Donor_id: '3278',
        organ_name: 'kidney',
        biofluids_name: 'None',
        purpose_name: 'Directed Donation',
    },

    {
        Donor_id: '5486',
        organ_name: 'liver',
        biofluids_name: 'blood',
        purpose_name: 'Non Directed Donation',
    },

    {
        Donor_id: '2156',
        organ_name: 'lungs',
        biofluids_name: 'plasma',
        purpose_name: 'Paired Donation',
    },

    {
        Donor_id: '0932',
        organ_name: 'Intestines',
        biofluids_name: 'None',
        purpose_name: 'Pediatric Donation',
    },

     
];





const seedUsers = () => Users.bulkCreate(UsersData);
modeule.exports = seedUsers;
