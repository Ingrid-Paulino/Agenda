module.exports = (sequelize, DataTypes) => {
  const Horary = sequelize.define(
    'Horary',
    {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: DataTypes.STRING(36),
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
        type: DataTypes.DOUBLE,
      },
      clientId: {
        allowNull: false,
        type: DataTypes.STRING,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'client_id',
        foreignKey: true,
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
