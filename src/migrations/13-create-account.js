"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("accounts", {
      username: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      staff_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "staffs",
          key: "staff_id",
        },
      },
      customer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "customers",
          key: "customer_id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("accounts");
  },
};