const db = require("../database/models");

//let db = require('../database/models')

let cancionesController = {

    detail: (req, res) => {
        db.Cancion.findByPk(req.params.id)
            .then(cancion => {
                res.render('detalleCancion.ejs', {cancion});
            });
    },
    add: function (req, res) {
     db.Genero.findAll()
      .then(function(generos){
          return res.render("agregarCancion.ejs", {generos:generos})
      })}
    ,
      crear: function(req, res, next){
       console.log(req.body)
        let body = {
            titulo: req.body.titulo,
            duracion: req.body.duracion,
            genero_id: req.body.genero,
            album_id: req.body.album,
            artista_id: req.body.artista
        }
          console.log(body)
        db.Cancion.create(
            body
        ).then( res.redirect('/'))
       .catch((error)=>{
        console.log(error, 'soy viche y no entiendo nada')
        next(error)
       })
      },
    edit: function(req,res) {
        let cancionPedida = db.Cancion.findByPk(req.params.id);
        let generoPedido = db.Genero.findAll();

        Promise.all([cancionPedida, generoPedido])
        .then(function([cancion, generos]){
            res.render('editarCancion',{cancion: cancion, generos} )
        })
        
    },
    update: function (req,res) {
        console.log(req.body.id)
        let cancionId = req.params.id;
        
       return db.Cancion.update(
            {
                titulo: req.body.titulo,
                duracion: req.body.duracion,
                genero: req.body.genero,
                album: req.body.album,
                artista: req.body.artista,
                
            },
            {
                where: {id: cancionId}
            })
        .then(()=> {
            return res.redirect('/')})               
    },
    borrar: function (req,res) {
        let cancionId = req.params.id;
        return db.Cancion.destroy({
            where: {
                id: cancionId
            }
        })
        res.redirect('/index')
       
    }
}

module.exports = cancionesController
