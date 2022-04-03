const router = require('express').Router();
const biofluidsRoutes = require('./biofluids-routes');
const organRoutes = require('./organ-routes');
const purposeRoutes = require('./purposeRoutes');
const userRoutes = require('./users-routes');

router.use('/biofluids', biofluidsRoutes);
router.use('/organs', organRoutes);
router.use('/purpose', purposeRoutes);
router.use('/user', userRoutes);

module.export = router;