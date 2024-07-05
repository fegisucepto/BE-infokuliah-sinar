'use strict';
const multer = require('../config/multer.js');
const parameterModel = require('../helper/parameterModel');
const Controller = require('../controllers/index');
const HomeController = require('../controllers/HomeController');
const express = require('express');
const router = express.Router();
const authentication = require('../middlewares/authentication');
const AlumniController = require('../controllers/AlumniController.js');
const QuestionController = require('../controllers/questionController');
const UserControllers = require('../controllers/UsersControllers.js');
const ImportSoal = require('../controllers/ImportSoalController.js');

router.post('/register', Controller.registrasi);
router.post('/login', Controller.login);

router.use(authentication);
router.get('/profile', Controller.getProfile);
router.put('/update/email', Controller.updateEmail);
router.put('/update/password', Controller.updatePassword);

router.get('/mycourses', HomeController.mycourses);
router.use('/courses', require('./home.js'));
router.get('/alumni', AlumniController.alumni);
router.post('/alumni/add', AlumniController.addAlumni);
router.get('/list-users', UserControllers.users);
router.get('/question', QuestionController.getQuestion);
router.post('/question/add', QuestionController.createSoal);
router.get('/listquestion', QuestionController.ListQuestion);
router.post('/submit-answers', QuestionController.submitAnswer);
router.post('/update-answers', QuestionController.updateAnswer);
router.post('/reset-score', QuestionController.resetScore);
router.get('/show-score', QuestionController.showUserScore);
router.delete('/question/delete/:id', QuestionController.delete);
router.get('/question/:id', QuestionController.GetQuestionById);
router.post('/import', parameterModel.define('SalesOffice'), multer.upload.single('data-excel'), ImportSoal.importSoal);

module.exports = router;
