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

//------sistema de ruteo y use()----------//
const mainRouter = require('./routes/main')
const cancionRouter = require('./routes/canciones')
app.use('/', mainRouter);
app.use('/canciones', cancionRouter);

app.listen(4000, ()=>{
    console.log(' http://localhost:4000/');
})