const express = require('express');
const router = express();


//--------controlador-----------//
const controller = require('../controllers/cancionesControllers')


router.get('/', controller.mostrar)


 module.exports = router