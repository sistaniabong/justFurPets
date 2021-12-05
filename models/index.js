// import models
const Pet = require('./Pet');
const PetOwner = require('./PetOwner');
const ScheduledActivity = require('./ScheduledActivity');
const User = require('./User');

PetOwner.hasMany(Pet, {
    foreignKey: 'pet_owner_id',
    onDelete: 'CASCADE'
});

Pet.belongsTo(PetOwner, {
    foreignKey: 'pet_owner_id'
});

ScheduledActivity.belongsTo(Pet, {
    foreignKey: 'pet_id',
});

Pet.hasMany(ScheduledActivity, {
    foreignKey: 'pet_id',
    onDelete: 'CASCADE'
});

module.exports = { Pet, ScheduledActivity, PetOwner , User};

