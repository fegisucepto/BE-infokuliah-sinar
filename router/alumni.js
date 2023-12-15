'use strict';
const AlumniController = require('../controllers/AlumniController');
const express = require('express');
const router = express.Router();

router.get('/', AlumniController.alumni);

module.exports = router;
