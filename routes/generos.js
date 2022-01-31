const express = require('express');
const router = express.Router();
const generosController = require('../controllers/generosControllers');

router.get('/generos', generosController.list);

module.exports = router;