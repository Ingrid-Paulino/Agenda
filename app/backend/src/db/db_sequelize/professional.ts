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
      specialties: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      type: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      addressId: {
        allowNull: false,
        type: DataTypes.STRING,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'address_id',
        references: {
          model: 'Addresses',
          key: 'id',
        },
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
      tableName: 'Professionals',
      underscored: true,
    }
  );

  Professional.associate = (models) => {
    Professional.hasOne(models.Address,
      { foreignKey: 'professional_id', as: 'addresses' });

    Professional.belongsTo(models.Client,
      { foreignKey: 'client_id', as: 'clients' });


    Professional.belongsTo(models.Specialtie,
      { foreignKey: 'specialtie_id', as: 'specialties' });
  };

  return Professional;
};

export default professionalDAO;
