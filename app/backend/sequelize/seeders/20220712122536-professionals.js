'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Professionals', [
      {
        id: 1,
        full_name: 'Heloisa Ezequiel Paulino Vasconcellos Dias',
        email: 'heloizaezequielp851@gmail.com',
        password: '123456789',
        type: 'profissional',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 2,
        full_name: 'Daniela Souza Silva',
        email: 'danisouza@gmail.com',
        password: '12312345',
        type: 'profissional',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Professionals', null, {});
  },
};
