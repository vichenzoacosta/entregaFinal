let db = require('../database/models')
console.log
let cancionesController = {
   crear: function ( req , res){
       db.Genero.findAll()
       .then(function(generos){
           return res.render("agregarCancion", {generos:generos})
       })
     },
     guardado: (req, res)=>{
         db.Cancion.id
            db.Cancion.create({
              titulo: req.body.titulo,
              duracion: req.body.duracion,
              generos: req.body.generos_id,
              albumes: req.body.albumes_id,
              artistas: req.body.artistas_id
            })
            .then(createdProduct => {
                res.redirect(`/products/${createdProduct.id}`);
            })
            .catch(res.send);
     }

    }
 



module.exports = cancionesController