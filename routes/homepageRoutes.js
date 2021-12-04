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


module.exports = router;