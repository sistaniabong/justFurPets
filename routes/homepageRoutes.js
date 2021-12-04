const router = require('express').Router();

router.get('/', async(req,res) => {
    try {
        res.render('homepage')
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/create', async(req,res) => {
    try {
        res.render('createPetPage')
    } catch (err) {
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