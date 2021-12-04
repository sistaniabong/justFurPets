const router = require('express').Router();
const { PetOwner } = require('../models');

router.get('/', async(req,res) => {
    try {
        res.render('homepage')
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/create', async(req,res) => {
    try {
        const petOwnerData = await PetOwner.findAll();
        // console.log(petOwnerData);
        const petOwners = petOwnerData.map((petOwner) => petOwner.get({ plain: true }));
        res.render('createPetPage', {petOwners});             
      }
    catch (err) {
      res.status(500).json(err);
    }
});


module.exports = router;