module.exports = (sequelize, DataTypes) => {
  const Professional = sequelize.define(
    'Professional',
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
      type: {
        allowNull: false,
        type: DataTypes.STRING,
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
      tableName: 'Professionals',
      underscored: true,
    }
  );

  Professional.associate = (models) => {
    Professional.hasMany(models.Address,
      { foreignKey: 'professionalId', as: 'addresses' });

    Professional.hasMany(models.Client,
      { foreignKey: 'professionalId', as: 'clients' });

    Professional.hasMany(models.Specialtie,
      { foreignKey: 'professionalId', as: 'specialties' });
  };

  return Professional;
};
