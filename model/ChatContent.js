const ChatContent = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    "chat_content",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      room_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    { tableName: "chat_content", freezTableName: true, timestamps: false }
  );
  return model;
};

module.exports = ChatContent;
