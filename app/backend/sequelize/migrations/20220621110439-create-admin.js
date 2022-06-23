'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Admins',
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
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        password: {
          allowNull: false,
          type: Sequelize.STRING,
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
    await queryInterface.dropTable('Admins');
  },
};
