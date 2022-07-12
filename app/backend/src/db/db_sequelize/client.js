module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define(
    'Client',
    {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: DataTypes.STRING(36),
      },
      fullName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'full_name',
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      professionalId: {
        allowNull: true,
        type: DataTypes.STRING,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'professional_id',
        foreignKey: true,
        references: {
          model: 'Professionals',
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
      tableName: 'Clients',
      underscored: true,
    }
  );

  Client.associate = (models) => {
    Client.hasMany(models.Horary,
      { foreignKey: 'clientId', as: 'horaries' });

    Client.hasMany(models.Address,
      { foreignKey: 'clientId', as: 'addresses' });

    Client.belongsTo(models.Professional,
      { foreignKey: 'professionalId', as: 'professionals' });
  };


  return Client;
};
