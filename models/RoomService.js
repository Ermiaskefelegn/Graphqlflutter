module.exports = (sequelize, dataTypes) => {
    const RoomService = sequelize.define("RoomService", {
      Id: {
        type: dataTypes.UUID,
        defaultValue: dataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      icon: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
    });
    return RoomService;
  };
  