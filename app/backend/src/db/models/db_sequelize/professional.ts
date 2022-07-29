import { Model, STRING, DATE, TIME, DOUBLE } from 'sequelize'
import db from '.'
import Address from './address'
import Client from './client'
import Specialtie from './specialtie'

class Professional extends Model {
  public id: string
  public fullName: string
  public email: number
  public password: string
  public type: string
  public createdAt: string
  public updatedAt: string
  // acrescentar o delete
}

Professional.init({
  id: {
    allowNull: false,
    // autoIncrement: true,
    primaryKey: true,
    type: STRING(36),
  },
  fullName: {
    allowNull: false,
    type: STRING,
    field: 'full_name',
  },
  email: {
    allowNull: false,
    type: STRING,
  },
  password: {
    allowNull: false,
    type: STRING,
  },
  type: {
    allowNull: false,
    type: STRING,
  },
  createdAt: {
    allowNull: false,
    type: DATE(3),
    field: 'created_at',
  },
  updatedAt: {
    allowNull: false,
    type: DATE(3),
    field: 'updated_at',
  },
},
  {
    sequelize: db,
    modelName: 'Professional',
    timestamps: true,
    tableName: 'Professionals',
    underscored: true,
  }
)

// Professional.associate = (models) => {
//   Professional.hasMany(models.Address,
//     { foreignKey: 'professionalId', as: 'addresses' })

//   Professional.hasMany(models.Client,
//     { foreignKey: 'professionalId', as: 'clients' })

//   Professional.hasMany(models.Specialtie,
//     { foreignKey: 'professionalId', as: 'specialties' })
// }


Professional.hasMany(Client, { foreignKey: 'id', as: 'clients' });

Professional.hasMany(Address, { foreignKey: 'id', as: 'addresses' });

Professional.hasMany(Specialtie, { foreignKey: 'id', as: 'specialties' });

Client.belongsTo(Professional, { foreignKey: 'professionalId', as: 'professionals' });

Address.belongsTo(Professional, { foreignKey: 'professionalId', as: 'professionals' });

Specialtie.belongsTo(Professional, { foreignKey: 'professionalId', as: 'professionals' });

export default Professional;
