const express = require('express');
const router = express();
//const multer = require("multer");
//const path = require("path")


//--------controlador-----------//
const controller = require('../controllers/cancionesControllers')


// mostrar una cancion//

router.get('/detalle/:id/', controller.detalle); 
//crear una cancion

router.get('/crear', controller.crear); 
router.post('/',  controller.store);
//editar una cancion

router.get('/editar/:id', controller.editar); 
router.post('/editar/:id',  controller.subir);


 module.exports = router