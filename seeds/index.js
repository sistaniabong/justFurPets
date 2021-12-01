const sequelize = require('../config/connection');
const { Pet, PetOwner, ScheduledActivity } = require('../models');

const petData = require('./userData.json');
const petOwnerData = require('./projectData.json');
const scheduledActivityData = require('./scheduledActivityData.json');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  const pets = await Pet.bulkCreate(petData, {
    individualHooks: true,
    returning: true,
  });

  const petOwners = await PetOwner.bulkCreate(petOwnerData, {
    individualHooks: true,
    returning: true,
  });

  const scheduledActivities = await ScheduledActivity.bulkCreate(scheduledActivityData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedAll();