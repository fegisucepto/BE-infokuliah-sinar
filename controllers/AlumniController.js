'use strict';
const { Op } = require('sequelize');
const { Alumni } = require('../models');

class AlumniController {
  static async alumni(req, res, next) {
    try {
      const alumniList = await Alumni.findAll({
      });
      res.status(200).json({
        statusCode: 200,
        data: alumniList,
      });
    } catch (err) {
      next(err);
    }
  }
}

// destroy

module.exports = AlumniController;
