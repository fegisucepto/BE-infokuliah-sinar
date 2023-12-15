'use strict';
const HomeController = require('../controllers/HomeController');
const express = require('express');
const router = express.Router();

router.get('/', HomeController.courses);
router.post('/add', HomeController.addCourse);
router.get('/:id', HomeController.cousesDetail);
router.patch('/edit/:id', HomeController.editData);
router.get('/buy/:id', HomeController.buy);
router.delete('/delete/:id', HomeController.delete);

module.exports = router;
