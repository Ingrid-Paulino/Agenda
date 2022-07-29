import { Model, INTEGER, STRING, DATE } from 'sequelize'
import db from '.'

class Address extends Model {
  public id: string
  public cep: string
  public number: number
  public complement: string
  public professionalId: string
  public clientId: string
  public adminId: string
  public createdAt: string
  public updatedAt: string
  // acrescentar o delete
}

Address.init({
  id: {
    allowNull: false,
    // autoIncrement: true,
    primaryKey: true,
    type: STRING(36),
  },
  cep: {
    allowNull: false,
    type: STRING(9),
  },
  number: {
    allowNull: false,
    type: INTEGER,
  },
  complement: {
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
  clientId: {
    allowNull: true,
    type: STRING,
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
    type: STRING,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    field: 'admin_id',
    references: {
      model: 'Admins',
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
    timestamps: true,
    tableName: 'Addresses',
    modelName: 'Address',
    underscored: true,
  })

// hasOne -> possui um
// hasMany -> possui vários
// belongsTo -> pertence a um
// belongsMany -> pertence a vários

// Address.associate = (models) => {
//   Address.belongsTo(models.Admin,
//     { foreignKey: 'adminId', as: 'admins' })

  // Address.belongsTo(models.Client,
  //   { foreignKey: 'clientId', as: 'clients' });

  // Address.belongsTo(models.Professional,
  //   { foreignKey: 'professionalId', as: 'professionals' });
// }

export default Address;

