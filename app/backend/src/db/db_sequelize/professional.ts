import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

type UserStatic = typeof Model
  & { associate: (models: any) => void }
  & { new(values?: Record<string, unknown>, options?: BuildOptions): any }

const professionalDAO = (sequelize: Sequelize) => {
  const Professional = <UserStatic>sequelize.define(
    'Professional',
    {
      id: { type: DataTypes.STRING(36), primaryKey: true },
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      type: DataTypes.STRING,
      specialties: DataTypes.STRING,
      addressId: {
        type: DataTypes.STRING,
        // foreignKey: true
      },
    },
    {
      timestamps: true,
      tableName: 'Professionals',
      underscored: true,
    }
  );

  Professional.associate = (models) => {
    Professional.hasMany(models.Address,
      { foreignKey: 'professionalId', as: 'addresses' });

    Professional.hasMany(models.Client,
      { foreignKey: 'professionalId', as: 'clients' });

    Professional.hasMany(models.Specialtie,
      { foreignKey: 'professionalId', as: 'specialties' });
  };

  return Professional;
};

export default professionalDAO;
