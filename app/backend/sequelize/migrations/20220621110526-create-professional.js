'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Professionals',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
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
        specialties: {
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
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE(3),
        },
      },
      { underscored: true }
    );
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Professionals');
  },
};
