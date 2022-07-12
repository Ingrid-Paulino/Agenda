module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    id: {
      allowNull: false,
      // autoIncrement: true,
      primaryKey: true,
      type: DataTypes.STRING(36),
    },
    cep: {
      allowNull: false,
      type: DataTypes.STRING(9),
    },
    number: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    complement: {
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
    clientId: {
      allowNull: true,
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
    adminId: {
      allowNull: true,
      type: DataTypes.STRING,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      field: 'admin_id',
      foreignKey: true,
      references: {
        model: 'Admins',
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
      tableName: 'Addresses',
      underscored: true,
    });

  // hasOne -> possui um
  // hasMany -> possui vários
  // belongsTo -> pertence a um
  // belongsMany -> pertence a vários

  Address.associate = (models) => {
    Address.belongsTo(models.Admin,
      { foreignKey: 'adminId', as: 'admins' });

    // Address.belongsTo(models.Client,
    //   { foreignKey: 'clientId', as: 'clients' });

    // Address.belongsTo(models.Professional,
    //   { foreignKey: 'professionalId', as: 'professionals' });
  };

  return Address;
};
