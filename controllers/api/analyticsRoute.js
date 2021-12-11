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

    const pet_counts = petsData.map((pet) => pet.count);

    const totalPetData = await Pet.findAll({
      attributes: [[sequelize.fn('count', sequelize.col('id')), 'total_count']],
      raw: true,
    });
<<<<<<< HEAD
    ///////////////////TOP
    const allDates = await Pet.findAll({
      attributes: [[sequelize.fn('max', sequelize.col('check_out_date')), 'max_date']],
      raw: true,
    });

    let today = new Date();

    var Difference_In_Time = (allDates[0].max_date).getTime() - today.getTime();


    var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));
  

    /////////BOT
    const totalPetActivity = await ScheduledActivity.findAll({
      attributes: [[sequelize.fn('count', sequelize.col('id')), 'total_activity']],
      raw: true,
    });




    const activityData = await Pet.findAll({
=======


    const totalPetActivity = await ScheduledActivity.findAll({  	
      attributes: [[sequelize.fn('count', sequelize.col('id')), 'total_activity']],
      raw: true,
    });

    const activityData = await Pet.findAll({  	
>>>>>>> bfdff60fb3ee22c70ed7be2e440cadd588302580
      include: [
        {
          model: ScheduledActivity,
          attributes: ['activity_description'],
        },
      ],
    });


    const petActivities = activityData.map((activity) => activity.get({ plain: true }));
    let petsWithNoActivities = [];
<<<<<<< HEAD
    for (let i = 0; i < petActivities.length; i++) {
      if (petActivities[i].scheduledActivities == "") {
=======
    let petsActivitiesNum=0;
    let petWithMostActivities=[];
    for(let i = 0; i < petActivities.length; i++)
    {
      if(petActivities[i].scheduledActivities == "")
      {
>>>>>>> bfdff60fb3ee22c70ed7be2e440cadd588302580
        petsWithNoActivities.push(petActivities[i].pet_name)
        
      }
      if(petActivities[i].scheduledActivities.length > petsActivitiesNum){
        petsActivitiesNum=petActivities[i].scheduledActivities.length;
        petWithMostActivities=petActivities[i];
      }
      
     
    }
<<<<<<< HEAD
    let activityNumbers = [petActivities.length + 1 - petsWithNoActivities.length, petsWithNoActivities.length + 1]
    res.render('analytics',
      {
        total_pet: totalPetData[0].total_count,
        total_activity: totalPetActivity[0].total_activity,
        pet_count: pet_counts,
        max_stay: Difference_In_Days,
        logged_in: req.session.logged_in,
        petsWithNoActivities,
        activityNumbers

      });
  } catch (err) {
=======

    let busiestPet= petWithMostActivities.pet_name;


    let activityNumbers = [petActivities.length - petsWithNoActivities.length, petsWithNoActivities.length ]

    res.render('analytics',
    {
      total_pet:totalPetData[0].total_count,
      total_activity:totalPetActivity[0].total_activity,
      pet_count:pet_counts,
      logged_in: req.session.logged_in,
      logged_in: req.session.logged_in,
      petsWithNoActivities,
      activityNumbers,
      busiestPet,
      petsWithNoActivities,
      activityNumbers
      
    });
  } catch(err){
>>>>>>> bfdff60fb3ee22c70ed7be2e440cadd588302580
    console.log(err)
  }

});


module.exports = router;