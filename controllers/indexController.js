let db = require('../database/models')

//console.log(db.Cancion.findAll.toString() ,' hola soy la db')
let index = {
    
    list: (req, res) => {
        console.log('soy la lista')
        return db.Cancion.findAll({include:db.Genero})
            .then(canciones => {
                console.log(canciones);
                res.render('listadoCanciones.ejs', {canciones})
            }).catch((error =>{
                console.log(error)
            }))
           
    } 
}


module.exports = index