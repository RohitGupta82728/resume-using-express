const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const skillsController = require('../controllers/skillsController');
const servicesController = require('../controllers/servicesController');
const contactController = require('../controllers/contactController');

router.get('/',homeController);
router.get('/services',servicesController);
router.get('/skills',skillsController);
router.get('/contact',contactController);


module.exports = router;