"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Horaries", [
      {
        id: 1,
        date: "2022-06-20",
        hour: "10:30:00",
        specialty: "pé",
        price: 20.0,
        client_id: 1,
        createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      {
        id: 2,
        date: "2022-08-15",
        hour: "10:30:00",
        specialty: "pé e mão",
        price: 35.0,
        client_id: 1,
        createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("Horaries", null, {});
  },
};
