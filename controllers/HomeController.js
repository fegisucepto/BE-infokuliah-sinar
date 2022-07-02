'use strict';
const { Op } = require('sequelize');
const { User, Course, User_Course, UserIdentity } = require('../models');
const convertToRupiah = require('../helper/convertToRp');
const useridentity = require('../models/useridentity');


class HomeController {
  static async courses(req, res, next) {
    try {
      const coursesList = await Course.findAll({
        // include: [UserIdentity],
      });
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
      //   let id = req.session.iduser;
      const CourseId = req.params.id;
      const coursesList = await User_Course.create({
        CourseId: +CourseId,
        UserId: userid,
      });
      res.status(200).json({
        statusCode: 200,
        data: coursesList,
      });
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

module.exports = HomeController;
