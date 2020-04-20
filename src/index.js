const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const { mongoose } = require('./database');

//Configuracion
const PORT = 4000;
app.set('port', process.env.PORT || PORT);

//Middleware
app.use(morgan('dev'));
app.use(express.json());

//Rutas - URL's
app.use('/api/task', require('./routes/taks.routes'));

//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Empezando el servidor

app.listen(app.get('port'), () => {
	console.log(`--> Escuchando en el puerto ${app.get('port')}`);
});
