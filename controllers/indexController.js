let db = require('../database/models')


let index = {
    mostrar: function ( req , res){
        console.log(db)
        db.Cancion.findAll()
        .then(canciones => {
            return res.render("listadoCanciones", {canciones:canciones})
            
        })
           
     
}
}
module.exports = index