'use strict';
const { Op } = require('sequelize');
const { User } = require('../models');

  exports.users = async (req, res, next) => {
    try {
      const userList = await User.findAll({
      });
      res.status(200).json({
        statusCode: 200,
        data: userList,
      });
    } catch (err) {
      next(err);
    }
  }

