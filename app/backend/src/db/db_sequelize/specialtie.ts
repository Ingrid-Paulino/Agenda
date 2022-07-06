import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

type UserStatic = typeof Model
  & { associate: (models: any) => void }
  & { new(values?: Record<string, unknown>, options?: BuildOptions): any }

const specialtieDAO = (sequelize: Sequelize) => {
  const Specialtie = <UserStatic>sequelize.define(
    'Specialtie',
    {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: DataTypes.STRING(36),
      },
      specialtie: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      clientId: {
        allowNull: false,
        type: DataTypes.STRING,
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
        type: DataTypes.DATE(3),
        field: 'created_at',
      },
      updatedAt: {
        allowNull: true,
        type: DataTypes.DATE(3),
        field: 'updated_at',
      },
    },
    {
      tableName: 'Specialties',
      underscored: true
    }
  );

  Specialtie.associate = (models) => {
    Specialtie.hasOne(models.Professional,
      { foreignKey: 'specialtie_id', as: 'professionals' });
  };

  return Specialtie;
};
export default specialtieDAO;
