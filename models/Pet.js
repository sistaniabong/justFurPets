const { Model, DataTypes, NOW } = require('sequelize');
const sequelize = require('../config/connection');

class Pet extends Model {}

Pet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pet_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pet_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pet_species: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pet_owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: 
      {
        model: 'petOwner',
        key: 'id',
      }
    },
    check_in_date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    check_out_date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    kennel_size: {
      type: DataTypes.STRING(1),
      defaultValue: false,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'pet',
  }
);

module.exports = Pet;
