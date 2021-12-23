"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Teachers extends Model {
    static associate(models) {
      Teachers.hasMany(models.Students, {
        foreignKey: {
          name: "teacherId",
          allowNull: false,
        },
        onDelete: "cascade",
      });
    }
  }
  Teachers.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncreament: true,
        allownull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allownull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allownull: false,
      },
      phoneNumber: {
        type: DataTypes.INTEGER,
        allownull: false,
      },
      adress: {
        type: DataTypes.STRING,
        allownull: false,
      },
      kifleKetema: {
        type: DataTypes.STRING,
        allownull: false,
      },
      teachingSchedule: {
        type: DataTypes.STRING,
        allownull: false,
      },
      educationLevel: {
        type: DataTypes.STRING,
        allownull: false,
      },
    },
    {
      sequelize,
      modelName: "Teachers",
    }
  );
  return Teachers;
};
