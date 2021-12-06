const router = require('express').Router();
const petRoutes = require('./petRoute');
const petOwnerRoute = require('./petOwnerRoute');
const petActivityRoutes = require('./petActivity.js');
const userRoutes = require('./userRoutes');



router.use('/pet', petRoutes);
router.use('/petOwner', petOwnerRoute);
router.use('/users', userRoutes);
<<<<<<< HEAD
router.use('/activity', petActivityRoutes);
=======
router.use('/scheduledActivity', petActivityRoutes);


>>>>>>> 1f1d0df3e8485fb7da2c5e1d7e4655bb9b74ae23

module.exports = router;