var express  = require('express')
var router   = express.Router()

var cancionesController = require("../controllers/cancionesController")


//router.get('/detalle/:id/', cancionesController.detail); 


router.get('/canciones/add', cancionesController.add);
router.post('/canciones/crear', cancionesController.crear);
router.get('/canciones/edit/:id', cancionesController.edit);
router.post('/canciones/editar/:id', cancionesController.update);
router.post('/canciones/borrar/:id', cancionesController.borrar);



module.exports = router