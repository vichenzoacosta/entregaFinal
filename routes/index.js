var express  = require('express')
var router   = express.Router()

var indexController = require("../controllers/indexController")
console.log('soy viche')
router.get("/", indexController.list)
console.log('consolelog despues de list')
router.use((error, req, res , next)=>{
    console.log(error, 'hola soy el middelware')
})
module.exports = router