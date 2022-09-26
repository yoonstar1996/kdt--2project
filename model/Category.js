const Category = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    "category",
    {
      id: {
        type: DataTypes.STRING(30),
        allowNull: false,
        primaryKey: true,
      },
    },
    { tableName: "category", freezTableName: true, timestamps: false }
  );
  return model;
};

module.exports = Category;
