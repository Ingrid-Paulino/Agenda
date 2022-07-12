module.exports = (sequelize, DataTypes) => {
  const Specialtie = sequelize.define(
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
        type: DataTypes.DOUBLE,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      professionalId: {
        allowNull: false,
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
      tableName: 'Specialties',
      underscored: true,
    }
  );

  Specialtie.associate = (models) => {
    Specialtie.belongsTo(models.Professional,
      { foreignKey: 'professional_id', as: 'professionals' });
  };

  return Specialtie;
};
