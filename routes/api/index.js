const router = require('express').Router();
const petRoutes = require('./petRoute');
const petOwnerRoute = require('./petOwnerRoute');
const petActivityRoutes = require('./petActivity');


router.use('/pet', petRoutes);
router.use('/petOwner', petOwnerRoute);

module.exports = router;


