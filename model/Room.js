const Room = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    "room",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      img: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      lastdate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    { tableName: "room", freezTableName: true, timestamps: false }
  );
  return model;
};

module.exports = Room;
