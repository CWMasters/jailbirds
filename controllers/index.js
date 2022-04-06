const router = require('express').Router();
<<<<<<< HEAD
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
=======
const apiRoutes = require('./api/');
const htmlRoutes = require('./routes/html-routes');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);
>>>>>>> origin

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;