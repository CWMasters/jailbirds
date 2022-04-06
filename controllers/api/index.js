const router = require('express').Router();
const biofluidsRoutes = require('./biofluids-routes');
const organsRoutes = require('./organ-routes');
const purposeRoutes = require('./purpose-Routes');
const usersRoutes = require('./users-routes');

router.use('/biofluids', biofluidsRoutes);
router.use('/organs', organsRoutes);
router.use('/purpose', purposeRoutes);
router.use('/users', usersRoutes);

module.exports = router;