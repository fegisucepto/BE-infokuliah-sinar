const { UserIdentity, User } = require('../models');
const { hashPassword, verifyPassword } = require('../helper/index');
const { addToken } = require('../helper/jwt');

class Controller {
  static async registrasi(req, res, next) {
    try {
      const { email, password } = req.body;
      const createUser = await User.create({
        email,
        password,
        role: '1',
      });
      res.status(200).json({
        statusCode: 200,
        data: {
          id: createUser.id,
          email: createUser.email,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const checkUser = await User.findOne({
        where: { email },
      });
      if (!checkUser) {
        throw new Error('User not found');
      }
      const comparePassword = verifyPassword(password, checkUser.password);

      if (!comparePassword) {
        throw new Error('User not found');
      }

      const payloadUser = {
        id: checkUser.id,
        email: checkUser.email,
      };
      const tokenUser = addToken(payloadUser);
      res.status(200).json({
        statusCode: 200,
        data: {
          access_token: tokenUser,
        },
      });
    } catch (err) {
      next(err);
    }
  }
  static async profill(req, res, next) {
    try {
      const profill = await User.findOne({
        where: {
          id: +req.params.id,
        },
      });
      if (!profill) {
        throw new Error('User not found');
      }

      res.status(200).json({
        statusCode: 200,
        message: 'This Profill Has been Show',
        data: profill,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
