const router = require('express').Router();
const { PetOwner } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async(req,res) => {
  if (req.session.logged_in) 
  {
    res.redirect('/api/pet');
    return;
  }
  else
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

router.get('/login', (req, res) => {
    // TODO: Add a comment describing the functionality of this if statement
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

router.get('/signuppage', async (req, res) => {
  res.render('signup');
});


module.exports = router;