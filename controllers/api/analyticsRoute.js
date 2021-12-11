const router = require('express').Router();
const { NOW } = require('sequelize/dist');
const sequelize = require('../../config/connection');
const { Pet, PetOwner, User, ScheduledActivity } = require('../../models');
const { max } = require('../../models/Pet');
const withAuth = require('../../utils/auth');



router.get('/', withAuth, async (req, res) => {
  try {
    const petsData = await Pet.findAll({
      attributes: ['pet_type', [sequelize.fn('count', sequelize.col('pet_type')), 'count']],
      group: ['pet.pet_type'],
      raw: true,
      order: [['pet_type', 'ASC']]
    });

    const pet_types = petsData.map((pet) => pet.pet_type);

    let pet_counts = [0,0,0,0]
    for (let i=0;i<petsData.length;i++){
      let pet_count = petsData[i].count;
      if (pet_types[i]=='bird'){
        pet_counts[0]=pet_count
      }
      if (pet_types[i]=='cat'){
        pet_counts[1]=pet_count
      }
      if (pet_types[i]=='dog'){
        pet_counts[2]=pet_count
      }
      if (pet_types[i]=='others'){
        pet_counts[3]=pet_count
      }
    }

    const totalPetData = await Pet.findAll({
      attributes: [[sequelize.fn('count', sequelize.col('id')), 'total_count']],
      raw: true,
    });

    const allDates = await Pet.findAll({
      attributes: [[sequelize.fn('max', sequelize.col('check_out_date')), 'max_date']],
      raw: true,
    });

    let today = new Date();

    var Difference_In_Time = (allDates[0].max_date).getTime() - today.getTime();


    var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));
  

    const totalPetActivity = await ScheduledActivity.findAll({
      attributes: [[sequelize.fn('count', sequelize.col('id')), 'total_activity']],
      raw: true,
    });




    const activityData = await Pet.findAll({
      include: [
        {
          model: ScheduledActivity,
          attributes: ['activity_description'],
        },
      ],
    });


    const petActivities = activityData.map((activity) => activity.get({ plain: true }));
    let petsWithNoActivities = [];
    let petsActivitiesNum=0;
    let petWithMostActivities=[];
    for(let i = 0; i < petActivities.length; i++)
    {
      if(petActivities[i].scheduledActivities == "")
      {
        petsWithNoActivities.push(petActivities[i].pet_name)
        
      }
      if(petActivities[i].scheduledActivities.length > petsActivitiesNum){
        petsActivitiesNum=petActivities[i].scheduledActivities.length;
        petWithMostActivities=petActivities[i];
      }
      
     
    }

    let busiestPet= petWithMostActivities.pet_name;


    let activityNumbers = [petActivities.length - petsWithNoActivities.length, petsWithNoActivities.length ]

    const totalPetbyMonth = await Pet.findAll({  	
      attributes: [[sequelize.fn('MONTH', sequelize.col('check_in_date')), 'month'],[sequelize.fn('count', sequelize.col('id')), 'total_count']],
      group: [sequelize.fn('MONTH', sequelize.col('check_in_date')), 'month'],
      raw: true,
      order: [[sequelize.fn('MONTH', sequelize.col('check_in_date')), 'ASC']]
    });
    let month_counts = [0,0,0,0,0,0,0,0,0,0,0,0]
    for (let i=0;i<totalPetbyMonth.length;i++){
      
      let month = totalPetbyMonth[i].month;
      let month_index=month-1;
      month_counts[month_index]=totalPetbyMonth[i].total_count
    }




    res.render('analytics',
    {
      total_pet:totalPetData[0].total_count,
      total_activity:totalPetActivity[0].total_activity,
      pet_count:pet_counts,
      max_stay: Difference_In_Days,
      logged_in: req.session.logged_in,
      logged_in: req.session.logged_in,
      petsWithNoActivities,
      activityNumbers,
      busiestPet,
      petsWithNoActivities,
      activityNumbers,
      month_counts
    });
  } catch(err){
    console.log(err)
  }

});


module.exports = router;