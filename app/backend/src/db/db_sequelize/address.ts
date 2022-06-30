import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

type UserStatic = typeof Model
  & { associate: (models: any) => void }
  & { new(values?: Record<string, unknown>, options?: BuildOptions): any }

const addressDAO = (sequelize: Sequelize) => {
  const Address = <UserStatic>sequelize.define(
    'Address',
    {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: DataTypes.STRING(36),
      },
      cep: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      number: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      complement: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE(3),
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE(3),
        field: 'updated_at',
      },
    },
    {
      tableName: 'Addresses',
      underscored: true,
    });

  // hasOne -> possui um
  // hasMany -> possui vários
  // belongsTo -> pertence a um
  // belongsMany -> pertence a vários

  Address.associate = (models) => {
    Address.belongsTo(models.Client,
      { foreignKey: 'address_id', as: 'clients' });

    Address.belongsTo(models.Professional,
      { foreignKey: 'address_id', as: 'professionals' });
  };

  return Address;
};

export default addressDAO;
