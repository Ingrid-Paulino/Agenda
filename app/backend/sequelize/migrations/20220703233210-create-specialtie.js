'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Specialties',
      {
        id: {
          allowNull: false,
          // autoIncrement: true,
          primaryKey: true,
          type: Sequelize.STRING(36),
        },
        specialtie: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        price: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        description: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        clientId: {
          allowNull: false,
          type: Sequelize.STRING,
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
          type: Sequelize.DATE(3),
          field: 'created_at',
        },
        updatedAt: {
          allowNull: true,
          type: Sequelize.DATE(3),
          field: 'updated_at',
        },
      },
      { underscored: true }
    );
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Specialties');
  },
};
