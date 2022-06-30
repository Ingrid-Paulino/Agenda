('use strict');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Addresses',
      {
        id: {
          allowNull: false,
          // autoIncrement: true,
          primaryKey: true,
          type: Sequelize.STRING(36),
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
    await queryInterface.dropTable('Addresses');
  },
};
