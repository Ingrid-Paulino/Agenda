"use strict"
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Clients",
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
        professionalId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          field: "professional_id",
          references: {
            model: "Professionals",
            key: "id",
          },
        },
        addressId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          field: "address_id",
          references: {
            model: "Addresses",
            key: "id",
          },
        },
        horaryId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          field: "horary_id",
          references: {
            model: "Horaries",
            key: "id",
          },
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE(3),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE(3),
        },
      }, { underscored: true  }
    )
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable("Clients")
  },
}
