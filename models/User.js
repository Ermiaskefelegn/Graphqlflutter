module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncreament: true,
      allownull: false,
    },
    firstName: {
      type: dataTypes.STRING,
      allownull: false,
    },
    lastName: {
      type: dataTypes.STRING,
      allownull: false,
    },
  });

  return User;
};
