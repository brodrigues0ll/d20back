'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [{
        id: 1,
        name: 'Bernardo',
        last_name: 'Rodrigues',
        username: 'brodrigues0ll',
        email: 'brodrigues.dev@gmail.com',
        password: '123456**',
        role: 'admin',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};