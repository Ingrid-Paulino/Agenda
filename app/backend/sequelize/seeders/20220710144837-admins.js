'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Admins', [
      {
        id: 1,
        full_name: 'Ingrid Paulino Pinheiro Vasconcellos Dias',
        email: 'ingridpaulino1012@gmail.com',
        password: '12345678',
        type: 'admin',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Admins', null, {});
  },
};
