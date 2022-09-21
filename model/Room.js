const Room = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    "room",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    },
    { tableName: "room", freezTableName: true, timestamps: false }
  );
  return model;
};

module.exports = Room;
