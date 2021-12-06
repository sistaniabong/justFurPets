const router = require('express').Router();
const petRoutes = require('./petRoute');
const petOwnerRoute = require('./petOwnerRoute');
const petActivityRoutes = require('./petActivity.js');
const userRoutes = require('./userRoutes');



router.use('/pet', petRoutes);
router.use('/petOwner', petOwnerRoute);
router.use('/users', userRoutes);
router.use('/activity', petActivityRoutes);
router.use('/scheduledActivity', petActivityRoutes);



module.exports = router;