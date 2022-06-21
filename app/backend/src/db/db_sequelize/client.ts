import { Sequelize, DataTypes, Model, BuildOptions } from "sequelize"

type UserStatic = typeof Model
  & { associate: (models: any) => void }
  & { new(values?: Record<string, unknown>, options?: BuildOptions): any}


const clientDAO = (sequelize: Sequelize) => {
  const Client = <UserStatic> sequelize.define(
    "Client",
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
      tableName: "Clients",
      underscored: true,
    }
  )

  Client.associate = (models) => {
    Client.hasOne(models.Professional,
      { foreignKey: "client_id", as: "professionals" })

    Client.hasMany(models.Horary,
      { foreignKey: "client_id", as: "horaries" })

    Client.hasOne(models.Address,
      { foreignKey: "client_id", as: "addresses" })
  }


  return Client
}

export default clientDAO
