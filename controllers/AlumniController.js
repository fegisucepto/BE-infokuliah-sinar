'use strict';
const { Op } = require('sequelize');
const { Alumni } = require('../models');

  exports.alumni = async (req, res, next) => {
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

