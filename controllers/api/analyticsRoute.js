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
    // console.log(totalPetData[0].total_count)

    const totalPetActivity = await ScheduledActivity.findAll({  	
      attributes: [[sequelize.fn('count', sequelize.col('id')), 'total_activity']],
      raw: true,
    });
<<<<<<< HEAD:routes/api/analyticsRoute.js

=======
>>>>>>> 8d54a17f53ed815061c00e37d8701ba2ff69b786:controllers/api/analyticsRoute.js
    const activityData = await Pet.findAll({  	
      include: [
        {
          model: ScheduledActivity,
          attributes: ['activity_description'],
        },
      ],     
    });
<<<<<<< HEAD:routes/api/analyticsRoute.js


    const petActivities = activityData.map((activity) => activity.get({ plain: true }));
    let petsWithNoActivities = [];
    let petsActivitiesNum=0;
    let petWithMostActivities=[];
=======
    const petActivities = activityData.map((activity) => activity.get({ plain: true }));
    let petsWithNoActivities = [];
>>>>>>> 8d54a17f53ed815061c00e37d8701ba2ff69b786:controllers/api/analyticsRoute.js
    for(let i = 0; i < petActivities.length; i++)
    {
      if(petActivities[i].scheduledActivities == "")
      {
        petsWithNoActivities.push(petActivities[i].pet_name)
<<<<<<< HEAD:routes/api/analyticsRoute.js
        
      }
      if(petActivities[i].scheduledActivities.length > petsActivitiesNum){
        petsActivitiesNum=petActivities[i].scheduledActivities.length;
        petWithMostActivities=petActivities[i];
      }
      
     
    }
    let busiestPet= petWithMostActivities.pet_name;


    let activityNumbers = [petActivities.length - petsWithNoActivities.length, petsWithNoActivities.length ]

=======
      }
    }
    let activityNumbers = [petActivities.length+1 - petsWithNoActivities.length, petsWithNoActivities.length+1 ]
    console.log(activityNumbers)
>>>>>>> 8d54a17f53ed815061c00e37d8701ba2ff69b786:controllers/api/analyticsRoute.js
    res.render('analytics',
    {
      total_pet:totalPetData[0].total_count,
      total_activity:totalPetActivity[0].total_activity,
      pet_count:pet_counts,
      logged_in: req.session.logged_in,
<<<<<<< HEAD:routes/api/analyticsRoute.js
      logged_in: req.session.logged_in,
      petsWithNoActivities,
      activityNumbers,
      busiestPet
=======
      petsWithNoActivities,
      activityNumbers
>>>>>>> 8d54a17f53ed815061c00e37d8701ba2ff69b786:controllers/api/analyticsRoute.js
    });
  } catch(err){
    console.log(err)
  }
    
  });


module.exports=router;