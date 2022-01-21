const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../database/datos.json');
const canciones = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    mostrar : (req,res) => {
         res.render('listadoCanciones',{
         canciones: canciones
         })
    },
	detalle: (req, res) => {
		const id = req.params.id;
		const cancion = canciones.find(cancion => {
			return cancion.id == id
		})
        res.render('detalleCancion.ejs', { 
			cancion: cancion
		})
	},
    crear: (req, res) => {  
		res.render("agregarCancion.ejs"); 
	},
	
	// (post) Create - Método para guardar la info
	store: (req,res)=>{
		const nuevaCancion = {
			id: canciones[canciones.length - 1].id +1,
			...req.body, 
		}

		canciones.push(nuevaCancion);

		fs.writeFileSync(productsFilePath, JSON.stringify(canciones, null, " "));
		res.redirect("/");

	}
}