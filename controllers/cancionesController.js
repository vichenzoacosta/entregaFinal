const db = require("../database/models");

//let db = require('../database/models')

let cancionesController = {
    add: function (req, res) {
     return db.Genero.findAll()
      .then(function(generos){
          return res.render("agregarCancion", {generos:generos})
      })},
      crear: function(){
        db.Cancion.create({
            titulo: req.body.titulo,
            duracion: req.body.duracion,
            genero: req.body.genero,
            album: req.body.album,
            artista: req.body.artista
        })
        res.redirect('/')
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
