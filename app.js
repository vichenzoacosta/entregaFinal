const express = require('express');
const app = express();
const path = require('path')
//const methodOverride = require('method-override');
app.use(express.json()); // Para poder leer el body

//-------------middlewares----------//
app.use(express.static(path.join(__dirname, "./public")))
//app.use(methodOverride('_method'));


app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/views'))

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

//------sistema de ruteo y use()----------//
 
const cancionRouter = require('./routes/canciones')
const indexRouter = require('./routes/index')
const generosRouter = require('./routes/generos')

app.use('/', indexRouter);
app.use('/canciones', cancionRouter);
app.use('/generos', generosRouter);

app.listen(4000, ()=>{
    console.log(' http://localhost:4000/');
})