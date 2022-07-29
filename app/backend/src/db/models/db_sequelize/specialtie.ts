import { Model, STRING, DATE, TIME, DOUBLE } from 'sequelize'
import db from '.'

class Specialtie extends Model {
  public id: string
  public specialtie: string
  public price: number
  public description: string
  public professionalId: string
  public createdAt: string
  public updatedAt: string
  // acrescentar o delete
}

Specialtie.init({
  id: {
    allowNull: false,
    // autoIncrement: true,
    primaryKey: true,
    type: STRING(36),
  },
  specialtie: {
    allowNull: false,
    type: STRING,
  },
  price: {
    allowNull: false,
    type: DOUBLE,
  },
  description: {
    allowNull: false,
    type: STRING,
  },
  professionalId: {
    allowNull: false,
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
    modelName: 'Specialtie',
    timestamps: true,
    tableName: 'Specialties',
    underscored: true,
  }
)

// Specialtie.associate = (models) => {
//   Specialtie.belongsTo(models.Professional,
//     { foreignKey: 'professional_id', as: 'professionals' })
// }

export default Specialtie;
