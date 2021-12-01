const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PetOwner extends Model {}

PetOwner.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    owner_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'petOwner',
  }
);

module.exports = PetOwner;
