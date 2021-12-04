const router = require('express').Router();
const petRoutes = require('./petRoute');
const userRoutes = require('./userRoutes');

router.use('/pet', petRoutes);
router.use('/users', userRoutes);

module.exports = router;


