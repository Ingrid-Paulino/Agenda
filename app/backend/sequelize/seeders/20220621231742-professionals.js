'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Professionals', [
      {
        id: 1,
        fullName: 'Heloisa Ezequiel Paulino Vasconcellos Dias',
        email: 'heloizaezequielp851@gmail.com',
        password: '123456789',
        specialties: 'oiii',
        address_id: 2,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        // specialty: [
        //   {
        //     specialitie: 'mão',
        //     price: 15.0,
        //   },
        //   {
        //     specialitie: 'pé',
        //     price: 20,
        //   },
        //   {
        //     specialitie: 'pé e mão',
        //     price: 35,
        //   },
        // ],
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Professionals', null, {});
  },
};
