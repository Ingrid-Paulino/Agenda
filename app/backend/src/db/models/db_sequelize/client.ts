import { Model, INTEGER, STRING, DATE } from 'sequelize'
import db from '.'
import Address from './address'
import Horary from './horary'
import Professional from './professional'

class Client extends Model {
  public id: string
  public fullName: string
  public email: number
  public password: string
  public type: string
  public professionalId: string
  public createdAt: string
  public updatedAt: string
  // acrescentar o delete
}

Client.init({
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
  professionalId: {
    allowNull: true,
    type: STRING,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    field: 'professional_id',
    references: {
      model: 'Professionals',
      key: 'id',
    },
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
    modelName: 'Client',
    timestamps: true,
    tableName: 'Clients',
    underscored: true,
  }
)

// Client.associate = (models) => {
//   Client.hasMany(models.Horary,
//     { foreignKey: 'clientId', as: 'horaries' })

//   Client.hasMany(models.Address,
//     { foreignKey: 'clientId', as: 'addresses' })

//   Client.belongsTo(models.Professional,
//     { foreignKey: 'professionalId', as: 'professionals' })
// }

Client.hasMany(Horary, { foreignKey: 'id', as: 'horaries' });

Client.hasMany(Address, { foreignKey: 'id', as: 'addresses' });

Horary.belongsTo(Client, { foreignKey: 'clientId', as: 'clients' });

Address.belongsTo(Client, { foreignKey: 'clientId', as: 'clients' });


export default Client


