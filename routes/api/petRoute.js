const router = require('express').Router();
const { Pet, PetOwner } = require('../../models');


router.get('/', async (req, res) => {
  // find all pets
  try {
    const hasQuery = Object.keys(req.query).length > 0;
    // filter the pet by pet_type (dog, cat, bird, others)
    if (hasQuery) {
      const petsData = await Pet.findAll({
        where: {
          pet_type: req.query.pet_type
        },
        include: [
          {
            model: PetOwner,
            attributes: ['owner_name','phone_number'],
          },
        ],
      });
      // res.status(200).json(petsData);
      const pets = petsData.map((pet) => pet.get({ plain: true }));
      res.render('allpets', { 
        pets
        // logged_in: req.session.logged_in 
      });
    }else{
      const petsData = await Pet.findAll({
        include: [
          {
            model: PetOwner,
            attributes: ['owner_name','phone_number'],
          },
        ],
      });

      const pets = petsData.map((pet) => pet.get({ plain: true }));
      res.render('allpets', { 
        pets
        // logged_in: req.session.logged_in 
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find all pets
  try {
    const petData = await Pet.findByPk(req.params.id);
    res.status(200).json(petData);              
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
    // create a new pet
    try {
      const petData = await Pet.create(req.body);
      res.status(200).json(petData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.put('/:id', async (req, res) => {
    // update a tag's name by its `id` value
    try {
      const petData = await Pet.update(
        {
          pet_name: req.body.pet_name,
          pet_type: req.body.pet_type,
          pet_species: req.body.pet_species,
          pet_owner_id: req.body.pet_owner_id,
          boarded: req.body.boarded,
          check_in_date: req.body.check_in_date,
          check_out_date: req.body.check_out_date,
          stay_duration: req.body.stay_duration,
          kennel_size: req.body.kennel_size
        },

        {where: {
          id: req.params.id
        }
      });
  
      if (!petData) {
        res.status(404).json({ message: 'No pet found with this id!' });
        return;
      }
  
      res.status(200).json(petData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try{
    Pet.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((deletedCategory) => {
        res.json(deletedCategory);
      })
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;