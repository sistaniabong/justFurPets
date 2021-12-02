const router = require('express').Router();
const petRoutes = require('./petRoute');

router.use('/pet', petRoutes);

module.exports = router;


