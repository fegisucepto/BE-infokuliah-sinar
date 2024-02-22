'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Questions', [
        {
          "id": 1,
          "question": "Apa ibu kota Indonesia?",
          "choices": ["Jakarta", "Surabaya", "Bandung", "Medan"],
          "correctAnswer": "Jakarta",
          "startTime": "2023-12-25T09:00:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 2,
          "question": "Siapakah penemu bola lampu?",
          "choices": ["Thomas Edison", "Alexander Graham Bell", "Albert Einstein", "Isaac Newton"],
          "correctAnswer": "Thomas Edison",
          "startTime": "2023-12-25T09:10:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 3,
          "question": "Apa nama planet terbesar di tata surya?",
          "choices": ["Jupiter", "Mars", "Saturnus", "Bumi"],
          "correctAnswer": "Jupiter",
          "startTime": "2023-12-25T09:20:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 4,
          "question": "Siapakah penulis novel 'Laskar Pelangi'?",
          "choices": ["Andrea Hirata", "Tere Liye", "Dee Lestari", "Eka Kurniawan"],
          "correctAnswer": "Andrea Hirata",
          "startTime": "2023-12-25T09:30:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 5,
          "question": "Berapa jumlah provinsi di Indonesia?",
          "choices": ["33", "34", "35", "36"],
          "correctAnswer": "34",
          "startTime": "2023-12-25T09:40:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 6,
          "question": "Apakah rumus kimia untuk air?",
          "choices": ["H2O", "CO2", "NaCl", "O2"],
          "correctAnswer": "H2O",
          "startTime": "2023-12-25T09:50:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 7,
          "question": "Siapakah presiden pertama Indonesia?",
          "choices": ["Soekarno", "Soeharto", "Jokowi", "Megawati"],
          "correctAnswer": "Soekarno",
          "startTime": "2023-12-25T10:00:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 8,
          "question": "Apa simbol kimia untuk emas?",
          "choices": ["Au", "Ag", "Fe", "Cu"],
          "correctAnswer": "Au",
          "startTime": "2023-12-25T10:10:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 9,
          "question": "Apa nama ibukota Jepang?",
          "choices": ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
          "correctAnswer": "Tokyo",
          "startTime": "2023-12-25T10:20:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 10,
          "question": "Siapakah penulis novel 'Harry Potter'?",
          "choices": ["J.R.R. Tolkien", "J.K. Rowling", "Stephen King", "George R.R. Martin"],
          "correctAnswer": "J.K. Rowling",
          "startTime": "2023-12-25T10:30:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 11,
          "question": "Apa lambang dari unsur hidrogen?",
          "choices": ["H", "He", "C", "O"],
          "correctAnswer": "H",
          "startTime": "2023-12-25T10:40:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 12,
          "question": "Siapa ilmuwan yang merumuskan teori relativitas umum?",
          "choices": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
          "correctAnswer": "Albert Einstein",
          "startTime": "2023-12-25T10:50:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 13,
          "question": "Apa warna dari langit saat siang hari?",
          "choices": ["Biru", "Merah", "Hijau", "Kuning"],
          "correctAnswer": "Biru",
          "startTime": "2023-12-25T11:00:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 14,
          "question": "Berapa jumlah planet dalam tata surya kita?",
          "choices": ["7", "8", "9", "10"],
          "correctAnswer": "8",
          "startTime": "2023-12-25T11:10:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 15,
          "question": "Siapakah penemu teori gravitasi?",
          "choices": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
          "correctAnswer": "Isaac Newton",
          "startTime": "2023-12-25T11:20:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 16,
          "question": "Apa julukan dari negara Brazil?",
          "choices": ["Negara Samba", "Negara Matador", "Negara Bunga", "Negara Merlion"],
          "correctAnswer": "Negara Samba",
          "startTime": "2023-12-25T11:30:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 17,
          "question": "Apa nama sungai terpanjang di dunia?",
          "choices": ["Sungai Nil", "Sungai Amazon", "Sungai Mississippi", "Sungai Yangtze"],
          "correctAnswer": "Sungai Amazon",
          "startTime": "2023-12-25T11:40:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 18,
          "question": "Siapakah pelukis terkenal dari lukisan 'Mona Lisa'?",
          "choices": ["Leonardo da Vinci", "Michelangelo", "Vincent van Gogh", "Pablo Picasso"],
          "correctAnswer": "Leonardo da Vinci",
          "startTime": "2023-12-25T11:50:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 19,
          "question": "Apa nama benua terbesar di dunia?",
          "choices": ["Benua Asia"," Benua Amerika", "Benua Eropa", "Benua Afrika"],
          "correctAnswer": "Benua Asia",
          "startTime": "2023-12-25T12:00:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 20,
          "question": "Apakah nama ibukota Australia?",
          "choices": ["Canberra", "Sydney", "Melbourne", "Brisbane"],
          "correctAnswer": "Canberra",
          "startTime": "2023-12-25T12:10:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 21,
          "question": "Siapakah penulis drama 'Romeo and Juliet'?",
          "choices": ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
          "correctAnswer": "William Shakespeare",
          "startTime": "2023-12-25T12:20:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 22,
          "question": "Berapa warna dasar pada model cat Warna RGB?",
          "choices": ["3", "4", "5", "6"],
          "correctAnswer": "3",
          "startTime": "2023-12-25T12:30:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 23,
          "question": "Siapa penemu telepon?",
          "choices": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
          "correctAnswer": "Alexander Graham Bell",
          "startTime": "2023-12-25T12:40:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 24,
          "question": "Apa nama ilmu yang mempelajari benda langit?",
          "choices": ["Biologi", "Fisika", "Kimia", "Astronomi"],
          "correctAnswer": "Astronomi",
          "startTime": "2023-12-25T12:50:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 25,
          "question": "Siapakah penemu lampu pijar?",
          "choices": ["Thomas Edison", "Nikola Tesla", "Benjamin Franklin", "Albert Einstein"],
          "correctAnswer": "Thomas Edison",
          "startTime": "2023-12-25T13:00:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 26,
          "question": "Apakah nama laut terbesar di dunia?",
          "choices": ["Lautan Pasifik", "Laut Merah", "Lautan Atlantik", "Lautan Hindia"],
          "correctAnswer": "Lautan Pasifik",
          "startTime": "2023-12-25T13:10:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 27,
          "question": "Siapakah penulis 'The Adventures of Sherlock Holmes'?",
          "choices": ["Agatha Christie", "Arthur Conan Doyle", "Edgar Allan Poe", "Charles Dickens"],
          "correctAnswer": "Arthur Conan Doyle",
          "startTime": "2023-12-25T13:20:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 28,
          "question": "Apa nama seniman terkenal dari lukisan 'The Starry Night'?",
          "choices": ["Pablo Picasso", "Claude Monet", "Vincent van Gogh", "Leonardo da Vinci"],
          "correctAnswer": "Vincent van Gogh",
          "startTime": "2023-12-25T13:30:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 29,
          "question": "Apakah bentuk bumi menurut teori yang umum diterima?",
          "choices": ["Bola", "Datar", "Silinder", "Kubus"],
          "correctAnswer": "Bola",
          "startTime": "2023-12-25T13:40:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 30,
          "question": "Siapakah penulis 'To Kill a Mockingbird'?",
          "choices": ["John Steinbeck","Harper Lee", "F. Scott Fitzgerald", "Ernest Hemingway"],
          "correctAnswer": "Harper Lee",
          "startTime": "2023-12-25T13:50:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 31,
          "question": "Siapakah penulis '1984'?",
          "choices": ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Isaac Asimov"],
          "correctAnswer": "George Orwell",
          "startTime": "2023-12-25T14:00:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 32,
          "question": "Apakah nama alat untuk mengukur gempa bumi?",
          "choices": ["Seismometer", "Spectrometer", "Barometer", "Thermometer"],
          "correctAnswer": "Seismometer",
          "startTime": "2023-12-25T14:10:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 33,
          "question": "Siapakah penemu teori relativitas umum?",
          "choices": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
          "correctAnswer": "Albert Einstein",
          "startTime": "2023-12-25T14:20:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 34,
          "question": "Apakah nama mata uang negara Jepang?",
          "choices": ["Yuan", "Yen", "Rupee", "Won"],
          "correctAnswer": "Yen",
          "startTime": "2023-12-25T14:30:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 35,
          "question": "Berapa jumlah musim di Bumi menurut kalender astronomi?",
          "choices": ["2", "3", "4", "5"],
          "correctAnswer": "4",
          "startTime": "2023-12-25T14:40:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 36,
          "question": "Siapakah penulis 'The Great Gatsby'?",
          "choices": ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "Harper Lee"],
          "correctAnswer": "F. Scott Fitzgerald",
          "startTime": "2023-12-25T14:50:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 37,
          "question": "Apakah nama sungai terpanjang di dunia?",
          "choices": ["Sungai Nil", "Sungai Amazon", "Sungai Mississippi", "Sungai Yangtze"],
          "correctAnswer": "Sungai Nil",
          "startTime": "2023-12-25T15:00:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 38,
          "question": "Siapakah penulis 'The Catcher in the Rye'?",
          "choices": ["J.D. Salinger", "Mark Twain", "George Orwell", "F. Scott Fitzgerald"],
          "correctAnswer": "J.D. Salinger",
          "startTime": "2023-12-25T15:10:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 39,
          "question": "Apakah nama benua terdingin di dunia?",
          "choices": ["Benua Asia", "Benua Amerika", "Benua Antartika", "Benua Afrika"],
          "correctAnswer": "Benua Antartika",
          "startTime": "2023-12-25T15:20:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 40,
          "question": "Siapakah penulis 'The Lord of the Rings'?",
          "choices": ["J.R.R. Tolkien", "J.K. Rowling", "Stephen King", "George R.R. Martin"],
          "correctAnswer": "J.R.R. Tolkien",
          "startTime": "2023-12-25T15:30:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 41,
          "question": "Apakah nama zat pemicu dalam mesin pembakaran dalam?",
          "choices": ["Oksigen", "Hidrogen", "Bensin", "Platina"],
          "correctAnswer": "Bensin",
          "startTime": "2023-12-25T15:40:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 42,
          "question": "Siapakah pelukis 'The Persistence of Memory'?",
          "choices": ["Pablo Picasso", "Claude Monet", "Vincent van Gogh", "Salvador Dalí"],
          "correctAnswer": "Salvador Dalí",
          "startTime": "2023-12-25T15:50:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 43,
          "question": "Apakah nama senjata tradisional Jepang?",
          "choices": ["Sword", "Bow", "Dagger", "Katana"],
          "correctAnswer": "Katana",
          "startTime": "2023-12-25T16:00:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 44,
          "question": "Berapa jumlah negara anggota ASEAN?",
          "choices": ["8", "9", "10", "11"],
          "correctAnswer": "10",
          "startTime": "2023-12-25T16:10:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 45,
          "question": "Siapakah penulis 'The Odyssey'?",
          "choices": ["Homer", "Plato", "Socrates", "Aristotle"],
          "correctAnswer": "Homer",
          "startTime": "2023-12-25T16:20:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 46,
          "question": "Apakah nama senjata tradisional Korea?",
          "choices": ["Katana", "Nunchaku", "Taekwondo", "Hanbok"],
          "correctAnswer": "Taekwondo",
          "startTime": "2023-12-25T16:30:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 47,
          "question": "Siapakah penulis 'The Canterbury Tales'?",
          "choices": ["Geoffrey Chaucer", "John Milton", "William Shakespeare", "Virgil"],
          "correctAnswer": "Geoffrey Chaucer",
          "startTime": "2023-12-25T16:40:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 48,
          "question": "Apakah nama senjata tradisional Tiongkok?",
          "choices": ["Ninja", "Qipao", "Kimono", "Jian"],
          "correctAnswer": "Jian",
          "startTime": "2023-12-25T16:50:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 49,
          "question": "Berapa jumlah langkah dalam satu mil?",
          "choices": ["1000", "1760", "2000", "5280"],
          "correctAnswer": "5280",
          "startTime": "2023-12-25T17:00:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        },
        {
          "id": 50,
          "question": "Siapakah penulis 'Brave New World'?",
          "choices": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Isaac Asimov"],
          "correctAnswer": "Aldous Huxley",
          "startTime": "2023-12-25T17:10:00Z",
          "duration": 1800,
          "createdAt": "2023-12-25T10:00:00Z",
          "updatedAt": "2023-12-25T10:00:00Z",
          
        }
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