const Product = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    "product",
    {
      id: {
        // id int not null primary key auto_increment
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      img: {
        type: DataTypes.TEXT("medium"),
        allowNull: false,
      },
      adult: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      position: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    { tableName: "product", freezTableName: true, timestamps: false }
  );
  return model;
};

module.exports = Product;
