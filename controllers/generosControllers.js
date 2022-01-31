const db = require('../database/models');


const genresController = {
    list: (req, res) => {
         db.Genero.findAll()
            .then(genres => {
                res.render('listaGeneros.ejs', {genres})
            })
        }}
    

module.exports = genresController;