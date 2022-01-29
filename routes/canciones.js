var express  = require('express')
var router   = express.Router()

var cancionesController = require("../controllers/cancionesController")
router.get("/crear", cancionesController.crear )
router.post("/crear", cancionesController.guardado )


module.exports = router