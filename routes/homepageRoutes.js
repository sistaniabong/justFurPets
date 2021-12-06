const router = require('express').Router();
const { PetOwner } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async(req,res) => {
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

router.get('/create',withAuth , async(req,res) => {
    try {
        const petOwnerData = await PetOwner.findAll();
        // console.log(petOwnerData);
        const petOwners = petOwnerData.map((petOwner) => petOwner.get({ plain: true }));
        res.render('createPetPage', {petOwners, logged_in: req.session.logged_in},);             
      }
    catch (err) {
      res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // TODO: Add a comment describing the functionality of this if statement
    if (req.session.logged_in) {
      res.redirect('/api/pet');
      return;
    }
  
    res.render('login');
  });

router.get('/signuppage', async (req, res) => {
  res.render('signup');
});

router.get('api/pet', async(req,res) => {
try {
  res.render('allpets')
} catch (err) {
  res.status(500).json(err);
}
});

module.exports = router;