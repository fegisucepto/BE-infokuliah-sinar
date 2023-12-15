'use strict';
const Controller = require('../controllers/index');
const HomeController = require('../controllers/HomeController')
const express = require('express');
const router = express.Router();
const authentication = require('../middlewares/authentication');
const AlumniController = require('../controllers/AlumniController.js');

router.post('/register', Controller.registrasi);
router.post('/login', Controller.login);

router.use(authentication);
router.get('/profill/:id', Controller.profill);

router.get('/mycourses', HomeController.mycourses);
router.use('/courses', require('./home.js'));
router.get('/alumni', AlumniController.alumni)
// router.use('/alumni' , require ('.alumni.js'))

module.exports = router;