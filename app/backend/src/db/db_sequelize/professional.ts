import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

type UserStatic = typeof Model
  & { associate: (models: any) => void }
  & { new(values?: Record<string, unknown>, options?: BuildOptions): any }

const professionalDAO = (sequelize: Sequelize) => {
  const Professional = <UserStatic>sequelize.define(
    'Professional',
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
      specialties: {
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
      tableName: 'Professionals',
      underscored: true,
    }
  );

  Professional.associate = (models) => {
    Professional.hasOne(models.Address,
      { foreignKey: 'professional_id', as: 'addresses' });

    Professional.belongsTo(models.Client,
      { foreignKey: 'client_id', as: 'clients' });
  };

  return Professional;
};

export default professionalDAO;
