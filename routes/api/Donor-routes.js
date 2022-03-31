const Donors = require('../../models/Donors');

const router = require('express').Router();
const { Donors } = require ('../../models'); 

//Get all Donors
router.get('/', (req, res) => {
     Donors.findAll({
     attributes: { exclude: ['password'] }
     })
         .then(dbDonorsData => res.json(dbDonorsData))
         .catch(err => {
             console.log(err);
             res.status(500).json(err);
         })
});

//Get one Donor
router.get('/:id', (req, res) => {
     donors.findOne({
     attributes: { exclude: ['password'] },
     })
     })
         .then(dbDonorsData => {
         if (!dbDonorsData) {
         res.status(404).json({ message: 'No user found with this id' });
         return;
         }
         res.json(dbDonorsData);
         })
         .catch(err => {
         console.log(err);
         res.status(500).json(err);
         });
  
     