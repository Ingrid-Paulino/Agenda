('use strict');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Addresses',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        cep: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        number: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        complement: {
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
      }, { underscored: true });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Addresses');
  },
};
