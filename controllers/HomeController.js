'use strict';
const { Op } = require('sequelize');
const { User, Course, User_Course, UserIdentity } = require('../models');
const convertToRupiah = require('../helper/convertToRp');
const useridentity = require('../models/useridentity');
// const UserCourse = require('../models/User_Course');
// const User = require('../models/user')
const jwt = require('jsonwebtoken');
class HomeController {
  static async courses(req, res, next) {
    try {
      const coursesList = await Course.findAll({});
      res.status(200).json({
        statusCode: 200,
        data: coursesList,
      });
    } catch (err) {
      next(err);
    }
  }

  static async buy(req, res, next) {
    try {
      const courseId = req.params.id;
      const token = req.headers.authorization;

      if (!token || !token.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized: Format token bearer tidak valid' });
      }

      const tokenValue = token.split(' ')[1];

      // Lakukan verifikasi token untuk mendapatkan informasi pengguna
      jwt.verify(tokenValue, process.env.KEY, async (err, decoded) => {
        if (err) {
          console.error(err); // Tampilkan pesan kesalahan
          return res.status(401).json({ message: 'Unauthorized: Token bearer tidak valid' });
        }

        const userId = decoded.id;

        // Lanjutkan dengan proses pembelian kursus
        const userCourse = await User_Course.create({
          UserId: userId,
          CourseId: courseId,
        });

        res.status(200).json({
          statusCode: 200,
          message: `Kursus dengan ID ${courseId} berhasil dibeli oleh pengguna dengan ID ${userId}`,
          data: userCourse,
        });
      });
    } catch (err) {
      if (err.name === 'SequelizeValidationError') {
        return res.status(400).json({ message: 'Validasi gagal: Pastikan data yang Anda masukkan benar' });
      }
      next(err);
    }
  }

  static async mycourses(req, res, next) {
    try {
      const userId = req.loggedUser.id; // Ambil ID pengguna dari req.loggedUser

      // Ambil daftar kursus yang dimiliki oleh pengguna berdasarkan ID
      const userCourses = await User_Course.findAll({
        where: { UserId: userId },
        include: [{ model: Course, attributes: ['id', 'name', 'description', 'price', 'imageURL'] }],
      });

      if (userCourses.length > 0) {
        res.status(200).json({
          statusCode: 200,
          data: userCourses,
        });
      } else {
        res.status(404).json({
          statusCode: 404,
          message: 'Anda belum membeli satu pun kursus.',
        });
      }
    } catch (err) {
      next(err);
    }
  }

  static async addCourse(req, res, next) {
    try {
      const body = req.body;
      const { name, imageURL, description, price } = body;
      const addCourse = await Course.create({
        name: name,
        imageURL: imageURL,
        description: description,
        price: +price,
      });
      res.status(201).json({
        statusCode: 201,
        data: addCourse,
      });
    } catch (err) {
      next(err);
    }
  }

  static async cousesDetail(req, res, next) {
    try {
      const course = await Course.findOne({
        where: {
          id: +req.params.id,
        },
      });
      if (course === null) {
        throw new Error('error not found');
      }

      res.status(200).json({
        statusCode: 200,
        message: 'This Couses Has been Show',
        data: course,
      });
    } catch (err) {
      next(err);
    }
  }

  static async editData(req, res, next) {
    try {
      const body = req.body;
      const { name, imageURL, description, price } = body;
      let data = { name, imageURL, description, price };
      const editData = await Course.update(data, {
        where: {
          id: +req.params.id,
        },
      });
      if (editData[0] === 0) {
        throw new Error('error not found');
      }
      res.status(201).json({
        statusCode: 201,
        message: 'This News Successfully Update',
        data: data,
      });
    } catch (err) {
      next(err);
    }
  }
  static async delete(req, res, next) {
    try {
      const CourseId = req.params.id;
      const deleted = await Course.deleteCourse(CourseId);
      res.status(201).json({
        statusCode: 201,
        message: 'Successfully Delete',
        data: deleted,
      });
    } catch (err) {
      next(err);
    }
  }
}

// const getProfile = async (req, res) => {
//   try {
//     const userProfile = await UserProfile.findOne({ user_id: req.user.id }); // Contoh pengambilan profil dari database dengan ID pengguna yang terautentikasi

//     if (!userProfile) {
//       return res.status(404).json({ message: 'Profil tidak ditemukan' });
//     }
//     res.status(200).json({ profile: userProfile });
//   } catch (err) {
//     console.error('Error fetching profile:', err);
//     res.status(500).json({ message: 'Terjadi kesalahan saat mengambil profil' });
//   }
// };

// module.exports = {
//   getProfile,
// };

module.exports = HomeController;
