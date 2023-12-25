'use strict';
const Controller = require('../controllers/index');
const HomeController = require('../controllers/HomeController')
const express = require('express');
const router = express.Router();
const authentication = require('../middlewares/authentication');
const AlumniController = require('../controllers/AlumniController.js');
const QuestionController = require('../controllers/questionController');

router.post('/register', Controller.registrasi);
router.post('/login', Controller.login);

router.use(authentication);
router.get('/profile', Controller.getProfile);
router.put('/update/email', Controller.updateEmail)
router.put('/update/password', Controller.updatePassword)

router.get('/mycourses', HomeController.mycourses);
router.use('/courses', require('./home.js'));
router.get('/alumni', AlumniController.alumni)
router.get('/question', QuestionController.getQuestion);
router.post('/submit-answer', QuestionController.submitAnswer);
router.get('/show-score', QuestionController.showUserScore)



module.exports = router;