const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ScheduledActivity extends Model {}

ScheduledActivity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    activity_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    activity_description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    pet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: 
      {
        model: 'pet',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'scheduledActivity',
  }
);

module.exports = ScheduledActivity;
