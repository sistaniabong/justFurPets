const router = require('express').Router();
const petRoutes = require('./petRoute');
const petOwnerRoute = require('./petOwnerRoute');
const petActivityRoutes = require('./petActivity');
const userRoutes = require('./userRoutes');



router.use('/pet', petRoutes);
router.use('/petOwner', petOwnerRoute);
router.use('/users', userRoutes);

module.exports = router;


