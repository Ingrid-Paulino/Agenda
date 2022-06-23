import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

type UserStatic = typeof Model
  & { associate: (models: any) => void }
  & { new(values?: Record<string, unknown>, options?: BuildOptions): any }


const clientDAO = (sequelize: Sequelize) => {
  const Client = <UserStatic>sequelize.define(
    'Client',
    {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: DataTypes.STRING(36),
      },
      fullName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'full_name',
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      professionalId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'professional_id',
        references: {
          model: 'Professionals',
          key: 'id',
        },
      },
      addressId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'address_id',
        references: {
          model: 'Addresses',
          key: 'id',
        },
      },
      horaryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'horary_id',
        references: {
          model: 'Horaries',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE(3),
        field: 'created_at',
      },
      updatedAt: {
        allowNull: true,
        type: DataTypes.DATE(3),
        field: 'updated_at',
      },
    },
    {
      tableName: 'Clients',
      underscored: true
    }
  );

  Client.associate = (models) => {
    Client.hasOne(models.Professional,
      { foreignKey: 'client_id', as: 'professionals' });

    Client.hasMany(models.Horary,
      { foreignKey: 'client_id', as: 'horaries' });

    Client.hasOne(models.Address,
      { foreignKey: 'client_id', as: 'addresses' });
  };


  return Client;
};

export default clientDAO;
