const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Pet, PetOwner, User, ScheduledActivity } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', withAuth, async(req,res) => {
  try {
    const petsData = await Pet.findAll({  	
      attributes: ['pet_type', [sequelize.fn('count', sequelize.col('pet_type')), 'count']],
      group : ['pet.pet_type'],
      raw: true,
      order: [['pet_type', 'ASC']]
    });

    const pet_counts = petsData.map((pet) => pet.count);

    const totalPetData = await Pet.findAll({  	
      attributes: [[sequelize.fn('count', sequelize.col('id')), 'total_count']],
      raw: true,
    });
    console.log(totalPetData[0].total_count)

    const totalPetActivity = await ScheduledActivity.findAll({  	
      attributes: [[sequelize.fn('count', sequelize.col('id')), 'total_activity']],
      raw: true,
    });

    res.render('analytics',
    {
      total_pet:totalPetData[0].total_count,
      total_activity:totalPetActivity[0].total_activity,
      pet_count:pet_counts,
      logged_in: req.session.logged_in
    });
  } catch(err){
    console.log(err)
  }
    
  });


module.exports=router;