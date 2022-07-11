// import { Sequelize, DataTypes, ModelAttributes, ModelOptions } from 'sequelize';
import { DataTypes, ModelAttributes, ModelOptions } from 'sequelize';
import Sequelize from 'sequelize/types/sequelize';

import { SequelizeModel } from '../../app/types';

const schema: ModelAttributes = {
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
    allowNull: false,
    type: DataTypes.STRING,
  },
};


const options: ModelOptions = {
  timestamps: true,
  tableName: 'Admins',
  underscored: true,
};

const associate: SequelizeModel['associate'] = (models, model): void => {
  model.hasOne(models.Address,
    { foreignKey: 'adminId', as: 'addresses' });
};

const adminDAO = (sequelize: Sequelize): SequelizeModel => {
  const model = sequelize.define('Admin', schema, options) as SequelizeModel;
  model.associate = associate;

  return model;
};

export default adminDAO;


















// import { Sequelize, DataTypes, Model, BuildOptions } from 'sequelize'

// type UserStatic = typeof Model
//   & { associate: (models: any) => void }
//   & { new(values?: Record<string, unknown>, options?: BuildOptions): any }

// const adminDAO = (sequelize: Sequelize) => {
//   const Admin = <UserStatic>sequelize.define(
//     'Admin',
//     {
//       id: { type: DataTypes.STRING(36), primaryKey: true },
//       fullName: DataTypes.STRING,
//       email: DataTypes.STRING,
//       password: DataTypes.STRING,
//       type: DataTypes.STRING,
//     },
//     {
//       timestamps: true,
//       tableName: 'Admins',
//       underscored: true,
//     }
//   )

//   Admin.associate = (models) => {
//     Admin.hasOne(models.Address,
//       { foreignKey: 'adminId', as: 'addresses' })
//   }

//   return Admin
// }

// export default adminDAO
