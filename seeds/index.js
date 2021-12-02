const sequelize = require('../config/connection');
const { Pet, PetOwner, ScheduledActivity } = require('../models');

const petData = require('./petData.json');
const petOwnerData = require('./petOwnerData.json');
const scheduledActivityData = require('./scheduledActivityData.json');

const seedAll = async () => {
  try{
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  const petOwners = await PetOwner.bulkCreate(petOwnerData, {
    individualHooks: true,
    returning: true,
  });

  const pets = await Pet.bulkCreate(petData, {
    individualHooks: true,
    returning: true,
  });
  const scheduledActivities = await ScheduledActivity.bulkCreate(scheduledActivityData, {
    individualHooks: true,
    returning: true,
  });  

}
  catch(error){
    console.log(error)
  }
  

 

  process.exit(0);
};

seedAll();