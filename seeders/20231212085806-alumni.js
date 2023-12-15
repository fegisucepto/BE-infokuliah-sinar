'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Alumnis', [
      {
        id: 1,
        name: 'John Doe',
        jurusan: 'Kedokteran',
        universitas: 'Universitas Gaja Mada',
        imageURL: 'https://thumbs.dreamstime.com/b/smiling-arabic-girl-hijab-using-digital-tablet-relaxing-couch-home-surfing-internet-reading-e-book-muslim-woman-169076069.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Jane Smith',
        jurusan: 'Manajemen',
        universitas: 'Universitas Indonesia',
        imageURL: 'https://thumbs.dreamstime.com/b/confident-asia-muslim-islam-businesswomen-executive-dressed-religious-veil-working-modern-office-looking-198428448.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
          id: 3,
          name: 'John Doe',
          jurusan: 'Teknik Informatika',
          universitas: 'Institut Teknologi Bandung',
          imageURL: 'https://thumbs.dreamstime.com/b/smiling-arabic-girl-hijab-using-digital-tablet-relaxing-couch-home-surfing-internet-reading-e-book-muslim-woman-169076069.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: 'Jane Smith',
          jurusan: 'Matematika',
          universitas: 'Universitas Negeri Yogyakarta',
          imageURL: 'https://thumbs.dreamstime.com/b/confident-asia-muslim-islam-businesswomen-executive-dressed-religious-veil-working-modern-office-looking-198428448.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: 'John Doe',
          jurusan: 'Biologi',
          universitas: 'Universitas Sebelas Maret',
          imageURL: 'https://thumbs.dreamstime.com/b/smiling-arabic-girl-hijab-using-digital-tablet-relaxing-couch-home-surfing-internet-reading-e-book-muslim-woman-169076069.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          name: 'Jane Smith',
          jurusan: 'Fisika',
          universitas: 'Universitas Gunadarma',
          imageURL: 'https://thumbs.dreamstime.com/b/confident-asia-muslim-islam-businesswomen-executive-dressed-religious-veil-working-modern-office-looking-198428448.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          name: 'John Doe',
          jurusan: 'Kedokteran',
          universitas: 'Universitas Gaja Mada',
          imageURL: 'https://thumbs.dreamstime.com/b/smiling-arabic-girl-hijab-using-digital-tablet-relaxing-couch-home-surfing-internet-reading-e-book-muslim-woman-169076069.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          name: 'Jane Smith',
          jurusan: 'Manajemen',
          universitas: 'Universitas Indonesia',
          imageURL: 'https://thumbs.dreamstime.com/b/confident-asia-muslim-islam-businesswomen-executive-dressed-religious-veil-working-modern-office-looking-198428448.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
            id: 9,
            name: 'John Doe',
            jurusan: 'Teknik Informatika',
            universitas: 'Institut Teknologi Bandung',
            imageURL: 'https://thumbs.dreamstime.com/b/smiling-arabic-girl-hijab-using-digital-tablet-relaxing-couch-home-surfing-internet-reading-e-book-muslim-woman-169076069.jpg',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 10,
            name: 'Jane Smith',
            jurusan: 'Matematika',
            universitas: 'Universitas Negeri Yogyakarta',
            imageURL: 'https://thumbs.dreamstime.com/b/confident-asia-muslim-islam-businesswomen-executive-dressed-religious-veil-working-modern-office-looking-198428448.jpg',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 11,
            name: 'John Doe',
            jurusan: 'Biologi',
            universitas: 'Universitas Sebelas Maret',
            imageURL: 'https://thumbs.dreamstime.com/b/smiling-arabic-girl-hijab-using-digital-tablet-relaxing-couch-home-surfing-internet-reading-e-book-muslim-woman-169076069.jpg',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 12,
            name: 'Jane Smith',
            jurusan: 'Fisika',
            universitas: 'Universitas Gunadarma',
            imageURL: 'https://thumbs.dreamstime.com/b/confident-asia-muslim-islam-businesswomen-executive-dressed-religious-veil-working-modern-office-looking-198428448.jpg',
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
