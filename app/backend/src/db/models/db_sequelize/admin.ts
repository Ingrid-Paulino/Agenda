import { Model, STRING, DATE } from 'sequelize'
import db from '.'
import Address from './address'

class Admin extends Model {
  public id: string
  public fullName: string
  public email: number
  public password: string
  public type: string
  public createdAt: string
  public updatedAt: string
  // acrescentar o delete
}

Admin.init({
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
    modelName: 'Admin',
    timestamps: true,
    tableName: 'Admins',
    underscored: true,
  }
)

// Admin.associate = (models) => {
//   Admin.hasOne(models.Address,
//     { foreignKey: 'adminId', as: 'addresses' })
// }

// Associations
Admin.hasOne(Address, { foreignKey: 'id', as: 'addresses' })

Address.belongsTo(Admin, { foreignKey: 'adminId', as: 'admins' })

export default Admin;

