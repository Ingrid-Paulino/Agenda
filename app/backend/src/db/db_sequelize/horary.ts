import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

type UserStatic = typeof Model
  & { associate: (models: any) => void }
  & { new(values?: Record<string, unknown>, options?: BuildOptions): any }

const horaryDAO = (sequelize: Sequelize) => {
  const Horary = <UserStatic>sequelize.define(
    'Horary',
    {
      id: { type: DataTypes.STRING(36), primaryKey: true },
      date: DataTypes.DATE,
      hour: DataTypes.TIME,
      specialty: DataTypes.STRING,
      price: DataTypes.INTEGER,
      clientId: {
        type: DataTypes.STRING,
        // foreignKey: true
      },
    },
    {
      timestamps: true,
      tableName: 'Horaries',
      underscored: true,
    }
  );

  Horary.associate = (models) => {
    Horary.belongsTo(models.Client,
      { foreignKey: 'client_id', as: 'clients' });
  };

  return Horary;
};

export default horaryDAO;
