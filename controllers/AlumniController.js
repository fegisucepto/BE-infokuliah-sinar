'use strict';
const { Op } = require('sequelize');
const { Alumni } = require('../models');

exports.alumni = async (req, res, next) => {
  try {
    const alumniList = await Alumni.findAll({});
    res.status(200).json({
      statusCode: 200,
      data: alumniList,
    });
  } catch (err) {
    next(err);
  }
};

// exports.addAlumni = async (req, res, next) => {
//   try {
//     const { name, imageURL, jurusan, universitas } = req.body;

//     // Periksa apakah properti yang diperlukan tersedia
//     if (!name || !imageURL || !jurusan || !universitas) {
//       return res.status(400).json({ error: 'Semua field harus diisi' });
//     }

//     // Tambahkan alumni ke dalam database
//     const addAlumni = await Alumni.create({
//       name,
//       imageURL,
//       jurusan,
//       universitas,
//     });

//     // Berikan respons sukses
//     res.status(201).json({
//       statusCode: 201,
//       data: addAlumni,
//     });
//   } catch (err) {
//     // Tangani kesalahan
//     console.error('Error adding alumni:', err);
//     res.status(500).json({ error: 'Terjadi kesalahan saat menambahkan alumni' });
//   }
// };

exports.addAlumni = async (req, res, next) => {
  try {
    const { name, imageURL, jurusan, universitas } = req.body;
    const newAlumni = await Alumni.create({
      name: name,
      imageURL: imageURL,
      jurusan: jurusan,
      universitas: universitas,
    });
    res.status(201).json({
      statusCode: 201,
      data: newAlumni,
    });
  } catch (err) {
    console.error('Error adding alumni:', err);
    res.status(500).json({
      statusCode: 500,
      message: 'Internal Server Error',
    });
  }
};
