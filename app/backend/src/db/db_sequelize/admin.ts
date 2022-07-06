import { Sequelize, DataTypes, Model, BuildOptions } from 'sequelize';

type UserStatic = typeof Model
  & { associate: (models: any) => void }
  & { new(values?: Record<string, unknown>, options?: BuildOptions): any }

const adminDAO = (sequelize: Sequelize) => {
  const Admin = <UserStatic>sequelize.define(
    'Admin',
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
      tableName: 'Admins',
      underscored: true,
    }
  );

  Admin.associate = (models) => {
    Admin.hasOne(models.Address,
      { foreignKey: 'admin_id', as: 'addresses' });
  };

  return Admin;
};

export default adminDAO;
