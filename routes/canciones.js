var express  = require('express')
var router   = express.Router()

var cancionesController = require("../controllers/cancionesController")


router.get('/detalle/:id/', cancionesController.detail); 


router.get('/add', cancionesController.add);
router.post('/crear', cancionesController.crear);
router.get('/edit/:id', cancionesController.edit);
router.post('/editar/:id', cancionesController.update);
router.post('/borrar/:id', cancionesController.borrar);



module.exports = router