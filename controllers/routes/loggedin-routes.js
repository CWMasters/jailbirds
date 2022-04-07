const router = require('express').Router();
const { users, donations } = require('../../models');

//get all donors for homepage
router.get('/', (req, res) => {
console.log('======================');
    users.findAll({

      include: [ 
          {

            model: donations,
            attributes : [ 'id', 'organs_donated', 'biofluids_donated']
          }
        ]
  
      })

      .then(dbusersData => res.json(dbusersData))
      const users = dbUsersData.map(users => post.users({ plain: true }));
      
      res.render('loggedin page', { users });
    })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      
          })
        
       
  
 
  /* get one donor
  router.get('/:id', (req, res) => {
    users.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'organs_donated',
        'biofluids_donated',
        'reason',
      ]})
    })
      .then(dbUsersData => {
        if (!dbUsersData) {
          res.status(404).json({ message: 'No Donor found with this id' });
          return;
        }
  
        const users = dbUsersData.get({ plain: true });
  
        res.render('single-post', {
          users,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      }); */

  
  module.exports = router;
