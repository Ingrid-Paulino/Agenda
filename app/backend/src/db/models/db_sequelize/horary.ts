import { Model, STRING, DATE, TIME, DOUBLE } from 'sequelize'
import db from '.'

class Horary extends Model {
  public id: string
  public date: string
  public hour: number
  public specialty: string
  public price: number
  public clientId: string
  public createdAt: string
  public updatedAt: string
  // acrescentar o delete
}

Horary.init({
  id: {
    allowNull: false,
    // autoIncrement: true,
    primaryKey: true,
    type: STRING(36),
  },
  date: {
    allowNull: false,
    type: DATE,
  },
  hour: {
    allowNull: false,
    type: TIME,
  },
  specialty: {
    allowNull: false,
    type: STRING,
  },
  price: {
    allowNull: false,
    type: DOUBLE,
  },
  clientId: {
    allowNull: false,
    type: STRING,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    field: 'client_id',
    references: {
      model: 'Clients',
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
    modelName: 'Horary',
    timestamps: true,
    tableName: 'Horaries',
    underscored: true,
  }
)

// Horary.associate = (models) => {
//   Horary.belongsTo(models.Client,
//     { foreignKey: 'client_id', as: 'clients' })
// }

export default Horary;
