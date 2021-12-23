"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Students extends Model {
    static associate(models) {
      Students.belongsTo(models.Teachers, {
        foreignKey: {
          name: "teacherId",
          allowNull: false,
        },
        onDelete: "cascade",
      });
    }
  }
  Students.init(
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
      studentPicture: {
        type: DataTypes.STRING,
        allownull: false,
      },
      studentId: {
        type: DataTypes.INTEGER,
        allownull: false,
      },
      gradeearned: {
        type: DataTypes.INTEGER,
        allownull: false,
      },
      studentPerformance: {
        type: DataTypes.STRING,
        allownull: false,
      },
      educationLevel: {
        type: DataTypes.STRING,
        allownull: false,
      },
      schedule: {
        type: DataTypes.STRING,
        allownull: false,
      },
    },
    {
      sequelize,
      modelName: "Students",
    }
  );
  return Students;
};
