'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}
  }
  User.init(
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncreament:true,
            allownull:false
        },
        firstName:{
            type:DataTypes.STRING,
            allownull:false,
        },
        lastName:{
            type:DataTypes.STRING,
            allownull:false,
        }
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
