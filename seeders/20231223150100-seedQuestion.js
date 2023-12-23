'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Questions', [
      {
        id: 1,
        question: 'Apa ibu kota Indonesia?',
        choices: ['Jakarta', 'Surabaya', 'Bandung', 'Medan'],
        correctAnswer: 'Jakarta',
        startTime: new Date('2023-12-30T09:00:00Z'), // Contoh waktu mulai ujian
        duration: 1800, // Durasi ujian dalam detik (contoh: 30 menit)
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        question: 'Siapakah presiden pertama Indonesia?',
        choices: ['Soekarno', 'Soeharto', 'Jokowi', 'Megawati'],
        correctAnswer: 'Soekarno',
        startTime: new Date('2023-12-30T10:00:00Z'), // Contoh waktu mulai ujian
        duration: 2400, // Durasi ujian dalam detik (contoh: 40 menit)
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },
  down: async () => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}