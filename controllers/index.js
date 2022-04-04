const router = require('express').Router();
const apiControllers = require('./api');

router.use('/api', apiControllers);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;