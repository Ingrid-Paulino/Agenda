'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Admins',
      {
        id: {
          allowNull: false,
          // autoIncrement: true,
          primaryKey: true,
          type: Sequelize.STRING(36),
        },
        fullName: {
          allowNull: false,
          type: Sequelize.STRING,
          field: 'full_name',
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        password: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        type: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        addressId: {
          allowNull: false,
          type: Sequelize.STRING,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          field: 'address_id',
          references: {
            model: 'Addresses',
            key: 'id',
          },
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE(3),
          field: 'created_at',
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE(3),
          field: 'updated_at',
        },
      },
      { underscored: true }
    );
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Admins');
  },
};
