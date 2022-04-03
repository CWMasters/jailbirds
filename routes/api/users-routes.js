const Donors = require('../../models');

const router = require('express').Router();
const { organs, biofluids, purpose } = require ('../../models'); 

//Get all Donors
router.get('/', (req, res) => {
     Donors.findAll(

     {
        include : [
          {
          model: organs,
          attributes : [ 'id', 'organ_name']
      },
      {
          model: biofluids,
          attributes: [ 'id', 'biofluids_name']
      },
      {
          model: purpose,
          attributes : [ 'id', 'purpose_name']
    }]


    })
         .then(dbDonorsData => res.json(dbDonorsData))
         .catch(err => {
             console.log(err);
             res.status(500).json(err);
         });
});

//Get one Donor
router.get('/:Donor_id', (req, res) => {
     donors.findOne(
        {
            where : {
                id: req.params.id
          },
          include : [
            {
            model: organs,
            attributes : [ 'id', 'organ_name']
        },
        {
            model: biofluids,
            attributes: [ 'id', 'biofluids_name']
        },
        {
            model: purpose,
            attributes : [ 'id', 'purpose_name']
      }]
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
        });
         
        // Create new user
        router.post('/', (req, res) => {
            User.create({
              username: req.body.username,
              email: req.body.email,
              password: req.body.password
            })
              .then(dbUserData => res.json(dbUserData))
              .catch(err => {
                console.log(err);
                res.status(500).json(err);
              });
          });
          
        // login
          router.post('/login', (req, res) => {
            User.findOne({
              where: {
                email: req.body.email
              }
            }).then(dbUserData => {
              if (!dbUserData) {
                res.status(400).json({ message: 'No user with that email address!' });
                return;
              }
          
              const validPassword = dbUserData.checkPassword(req.body.password);
          
              if (!validPassword) {
                res.status(400).json({ message: 'Incorrect password!' });
                return;
              }
          
              res.json({ user: dbUserData, message: 'You are now logged in!' });
            });
          });
        
          router.delete('/:Donor_id', (req, res) => {
            User.destroy({
              where: {
                id: req.params.id
              }
            })
              .then(dbUserData => {
                if (!dbUserData) {
                  res.status(404).json({ message: 'No user found with this id' });
                  return;
                }
                res.json(dbUserData);
              })
              .catch(err => {
                console.log(err);
                res.status(500).json(err);
              });
          });
          
          module.exports = router;
  
     