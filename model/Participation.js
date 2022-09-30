const Participation = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    "participation",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      room_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      target: {
        type: DataTypes.TEXT,
      },
    },
    { tableName: "participation", freezTableName: true, timestamps: false }
  );
  return model;
};

module.exports = Participation;
