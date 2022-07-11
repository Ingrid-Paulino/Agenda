import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

type UserStatic = typeof Model
  & { associate: (models: any) => void }
  & { new(values?: Record<string, unknown>, options?: BuildOptions): any }

/** //JSdocs
 * @param {import('sequelize').Sequelize } sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const specialtieDAO = (sequelize: Sequelize) => {
  const Specialtie = <UserStatic>sequelize.define(
    'Specialtie',
    {
      id: { type: DataTypes.STRING(36), primaryKey: true },
      specialtie: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.STRING,
      clientId: {
        type: DataTypes.STRING,
        // foreignKey: true
      },
    },
    {
      timestamps: true,
      tableName: 'Specialties',
      underscored: true
    }
  );

  Specialtie.associate = (models) => {
    Specialtie.belongsTo(models.Professional,
      { foreignKey: 'professional_id', as: 'professionals' });
  };

  return Specialtie;
};
export default specialtieDAO;
