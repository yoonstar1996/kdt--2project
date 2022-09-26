const Reveiw = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    "review",
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
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      reveiw: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      img: {
        type: DataTypes.TEXT("long"),
        allowNull: false,
      },
    },
    { tableName: "review", freezTableName: true, timestamps: false }
  );
  return model;
};

module.exports = Reveiw;
