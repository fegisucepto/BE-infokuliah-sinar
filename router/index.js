'use strict';
const Controller = require('../controllers/index');
const express = require('express');
const router = express.Router();
const authentication = require('../middlewares/authentication');

router.post('/register', Controller.registrasi);
router.post('/login', Controller.login);

router.use(authentication);

router.use('/courses', require('./home.js'));
module.exports = router;
