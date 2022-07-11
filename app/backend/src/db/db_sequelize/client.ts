import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

type UserStatic = typeof Model
  & { associate: (models: any) => void }
  & { new(values?: Record<string, unknown>, options?: BuildOptions): any }


const clientDAO = (sequelize: Sequelize) => {
  const Client = <UserStatic>sequelize.define(
    'Client',
    {
      id: { type: DataTypes.STRING(36), primaryKey: true },
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      professionalId: {
        type: DataTypes.STRING,
        // foreignKey: true
      },
      addressId: {
        type: DataTypes.STRING,
        // foreignKey: true
      },

    },
    {
      timestamps: true,
      tableName: 'Clients',
      underscored: true
    }
  );

  Client.associate = (models) => {
    Client.hasMany(models.Horary,
      { foreignKey: 'clientId', as: 'horaries' });

    Client.hasMany(models.Address,
      { foreignKey: 'clientId', as: 'addresses' });

    Client.belongsTo(models.Professional,
      { foreignKey: 'professionalId', as: 'professionals' });
  };


  return Client;
};

export default clientDAO;
