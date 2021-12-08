const router = require('express').Router();
const { PetOwner } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
  // find all pet owners
  try {
      const petOwnerData = await PetOwner.findAll();
      console.log(petOwnerData);
      const petOwners = petOwnerData.map((petOwner) => petOwner.get({ plain: true }));
      res.status(200).json(petOwners);             
    }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single pet owner
  try {
    const singlePetOwnerData = await PetOwner.findByPk(req.params.id);
    res.status(200).json(singlePetOwnerData);              
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
    // create a new pet owner
    try {
      const newPetOwnerData = await PetOwner.create(req.body);
      res.status(200).json(newPetOwnerData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//Reach.............................................
// router.put('/:id', async (req, res) => {
//     // update a tag's name by its `id` value
//     try {
//       const updatedPetOwnerData = await PetOwner.update(
//         {
//           owner_name: req.body.owner_name,
//           phone_number: req.body.phone_number
//         },
//         {where: {
//           id: req.params.id
//         }
//       });
//       if (!updatedPetOwnerData) {
//         res.status(404).json({ message: 'No pet found with this id!' });
//         return;
//       }
  
//       res.status(200).json(updatedPetOwnerData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

//Reach........................................
// router.delete('/:id', (req, res) => {
//   // delete a category by its `id` value
//   try{
//     PetOwner.destroy({
//       where: {
//         id: req.params.id,
//       },
//     })
//       .then((deletedPetOwner) => {
//         res.json(deletedPetOwner);
//       })
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

module.exports = router;