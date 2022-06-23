'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Horaries',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        date: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        hour: {
          allowNull: false,
          type: Sequelize.TIME,
        },
        specialty: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        price: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE(3),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE(3),
        },
      }, { underscored: true }
    );
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Horaries');
  },
};
