const router = require('express').Router();
const { users, donations } = require('../../models');

// router.get('/', (req, res) => {
//     res.render('../views/home')
// })

// router.get('/loggedin', (req, res) => {
//     res.render('../views/partials/loggedin', {
//         loggedIn: true,
//         userName: 'Chris',
//         organs: [{}]
//     });
// });

// get all posts for homepage
router.get('/', (req, res) => {
    console.log('======================');
    donations.findAll({
  
      include: [
        {
          model: users,
          attributes: ['id', 'organs_donated', 'biofluids_donated', 'reason', 'username'],
  
        },
      ]
    })
  
      .then(dbDonationsData => {
        const donations = dbDonationsData.map(donations => donations.get({ plain: true }));
  
        res.render('home', {
          donations,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;

