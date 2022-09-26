const Alarm = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    "alarm",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      alarm_content_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { tableName: "alarm", freezTableName: true, timestamps: false }
  );
  return model;
};

module.exports = Alarm;
