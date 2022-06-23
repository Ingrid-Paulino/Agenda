'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Addresses', [
      {
        id: 1,
        cep: '31430-533',
        number: 10,
        complement: 'casa',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 2,
        cep: '31330-500',
        number: 35,
        complement: 'ap401, b2',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Addresses', null, {});
  },
};
