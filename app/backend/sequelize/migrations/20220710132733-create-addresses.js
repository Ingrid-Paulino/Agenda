('use strict');
module.exports = {
  /**
   * @param {import('sequelize').queryInterface } queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   */

  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.STRING(36),
      },
      cep: {
        allowNull: false,
        type: Sequelize.STRING(9),
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      complement: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      professionalId: {
        allowNull: true,
        type: Sequelize.STRING,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'professional_id',
        references: {
          model: 'Professionals',
          key: 'id',
        },
      },
      clientId: {
        allowNull: true,
        type: Sequelize.STRING,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'client_id',
        references: {
          model: 'Clients',
          key: 'id',
        },
      },
      adminId: {
        allowNull: true,
        type: Sequelize.STRING,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'admin_id',
        references: {
          model: 'Admins',
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
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Addresses');
  },
};
