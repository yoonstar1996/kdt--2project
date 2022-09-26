const AlarmContent = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    "alarm_content",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    { tableName: "alarm_content", freezTableName: true, timestamps: false }
  );
  return model;
};

module.exports = AlarmContent;
