import { Sequelize, DataTypes } from "sequelize"

const adminDAO = (sequelize: Sequelize) => {
  const Admin = sequelize.define(
    "Admin",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fullName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE(3),
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE(3),
      },
    },
    {
      tableName: "Admins",
      underscored: true,
    }
  )
  return Admin
}

export default adminDAO
