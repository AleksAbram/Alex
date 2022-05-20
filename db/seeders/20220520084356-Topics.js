'use strict';
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Topics', [
      {
        title: 'Naruto',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'xcnadk',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Topics', null, {});
  },
};
