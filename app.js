const express = require('express');
const path = require('path');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const sequelize = require('./src/db/sequelize');


const app = express();


const hostname = '127.0.0.1';
const port = 3000;



app
	.use(express.static(path.join(__dirname, 'static')))
	.use(favicon(__dirname + '/favicon.ico'))
	.use(morgan('dev'))
	.use(bodyParser.json())

sequelize.initDb();

// Points de terminaison

require("./src/routes/findAllPokemons")(app);
require("./src/routes/findPokemonByPk")(app);
require("./src/routes/createPokemon")(app);
require("./src/routes/updatePokemon")(app);
require("./src/routes/deletePokemon")(app);

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '/index.html'));
	console.log(__dirname)
});

app.listen(port, () => console.log(`Server running at http://${hostname}:${port}/`));
