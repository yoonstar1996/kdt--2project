const ProductLikeUsers = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    "product_like_users",
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
    },
    { tableName: "product_like_users", freezTableName: true, timestamps: false }
  );
  return model;
};

module.exports = ProductLikeUsers;
