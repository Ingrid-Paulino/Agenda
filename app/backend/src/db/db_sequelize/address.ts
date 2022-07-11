// import { Sequelize } from 'sequelize'
import Sequelize from 'sequelize/types/sequelize';

import { DataTypes,  ModelAttributes, ModelOptions} from 'sequelize';
import { SequelizeModel } from '../../app/types';


const schema: ModelAttributes = {
  id: {
    allowNull: false,
    // autoIncrement: true,
    primaryKey: true,
    type: DataTypes.STRING(36),
  },
  cep: {
    allowNull: false,
    type: DataTypes.STRING(9),
  },
  number: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  complement: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  professionalId: {
    allowNull: true,
    type: DataTypes.STRING,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    field: 'professional_id',
    references: {
      model: 'Professionals',
      key: 'id',
    },
  },
  clientId: {
    allowNull: true,
    type: DataTypes.STRING,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    field: 'client_id',
    references: {
      model: 'Clients',
      key: 'id',
    },
  },
  adminId: {
    allowNull: true,
    type: DataTypes.STRING,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    field: 'admin_id',
    references: {
      model: 'Admins',
      key: 'id',
    },
  },
};

const options: ModelOptions = {
  timestamps: true,
  tableName: 'Addresses',
  underscored: true,
};

const associate: SequelizeModel['associate'] = (models, model): void => {
  model.belongsTo(models.Admin,
    { foreignKey: 'adminId', as: 'admins' });
};

const addressDAO = (sequelize: Sequelize): SequelizeModel => {
  const model = sequelize.define('Address', schema, options) as SequelizeModel;
  model.associate = associate;

  return model;
};

export default addressDAO;






// import { BuildOptions, DataTypes, Model, ModelStatic, Sequelize } from 'sequelize';
// const addressDAO = (sequelize: Sequelize): SequelizeModel => {
//   const Address = sequelize.define(
//     'Address',
//     {
//       id: { type: DataTypes.STRING(36), primaryKey: true },
//       cep: DataTypes.STRING,
//       number: DataTypes.INTEGER,
//       complement: DataTypes.STRING,
//       professionalId: {
//         type: DataTypes.STRING,
//         // foreignKey: true
//       },
//       clientId: {
//         type: DataTypes.STRING,
//         // foreignKey: true
//       },
//       adminId: {
//         type: DataTypes.STRING,
//         // foreignKey: true
//       },
//     },
//     {
//       timestamps: true,
//       tableName: 'Addresses',
//       underscored: true,
//     }) as SequelizeModel

//   // hasOne -> possui um
//   // hasMany -> possui vários
//   // belongsTo -> pertence a um
//   // belongsMany -> pertence a vários

//   Address.associate = (models) => {
//     Address.belongsTo(models.Admin,
//       { foreignKey: 'adminId', as: 'admins' })

//     // Address.belongsTo(models.Client,
//     //   { foreignKey: 'clientId', as: 'clients' });

//     // Address.belongsTo(models.Professional,
//     //   { foreignKey: 'professionalId', as: 'professionals' });
//   }

//   return Address
// }

// export default addressDAO
