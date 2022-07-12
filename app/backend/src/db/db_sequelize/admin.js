module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    'Admin',
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
      tableName: 'Admins',
      underscored: true,
    }
  );

  Admin.associate = (models) => {
    Admin.hasOne(models.Address,
      { foreignKey: 'adminId', as: 'addresses' });
  };

  return Admin;
};

