'use strict';
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Cards', [
      {
        question: 'ti pidor?',
        answer: 'da',
        id_topic: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'da',
        answer: 'net',
        id_topic: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
