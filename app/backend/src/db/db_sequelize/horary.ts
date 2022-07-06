import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

type UserStatic = typeof Model
  & { associate: (models: any) => void }
  & { new(values?: Record<string, unknown>, options?: BuildOptions): any }

const horaryDAO = (sequelize: Sequelize) => {
  const Horary = <UserStatic>sequelize.define(
    'Horary',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      date: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      hour: {
        allowNull: false,
        type: DataTypes.TIME,
      },
      specialty: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
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
        allowNull: false,
        type: DataTypes.DATE(3),
        field: 'updated_at',
      },
    },
    {
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
