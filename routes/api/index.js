const router = require('express').Router();
const petRoutes = require('./petRoute');
const petOwnerRoute = require('./petOwnerRoute');
const petActivityRoutes = require('./petActivity');
const userRoutes = require('./userRoutes');
const analyticsRoutes = require('./analyticsRoute');




router.use('/pet', petRoutes);
router.use('/petOwner', petOwnerRoute);
router.use('/users', userRoutes);
router.use('/scheduledActivity', petActivityRoutes);
router.use('/analytics', analyticsRoutes);



module.exports = router;