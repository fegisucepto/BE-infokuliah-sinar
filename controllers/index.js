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
      });
  
      res.status(200).json({
        statusCode: 200,
        data: {
          id: createUser.id,
          email: createUser.email,
        },
      });
    } catch (err) {
      console.error('Error during registration:', err); // Tampilkan pesan kesalahan untuk pemahaman lebih lanjut
      next(err); // Teruskan kesalahan ke middleware error handling
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
 
static async  getProfile(req, res) {
  try {
    const loggedInUserId = req.loggedUser.id; // Mendapatkan ID pengguna dari token

    const userProfile = await User.findOne({ where: { id: loggedInUserId } });

    if (!userProfile) {
      return res.status(404).json({ message: 'User profile not found' });
    }

    // Mengirim data profil pengguna sebagai respons
    res.status(200).json({
      message: 'User profile retrieved successfully',
      data: userProfile,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

// ...

static async updateEmail(req, res) {
  try {
    const { email } = req.body;
    const loggedInUserId = req.loggedUser.id;

    const updatedUser = await User.findByPk(loggedInUserId);
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    updatedUser.email = email;
    await updatedUser.save();

    res.status(200).json({
      statusCode: 200,
      message: 'Email updated successfully',
      data: {
        id: updatedUser.id,
        email: updatedUser.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

static async updatePassword(req, res) {
  try {
    const { password } = req.body;
    const loggedInUserId = req.loggedUser.id;

    const updatedUser = await User.findByPk(loggedInUserId);
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Hashing password baru dengan fungsi hashPassword dari helper
    const hashedPassword = await hashPassword(password);
    updatedUser.password = hashedPassword;

    await updatedUser.save();

    res.status(200).json({
      statusCode: 200,
      message: 'Password updated successfully',
      data: {
        id: updatedUser.id,
        email: updatedUser.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

// ...

  
}

module.exports = Controller;
