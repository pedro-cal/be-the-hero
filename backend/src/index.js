//NODEMON - script 'start' (in package.json) - CMD: npm start  |  CMD: ctrl+c (parar servidor nodemon)

//3 Formas de acessar bancos de dados
// 1) Driver (da ferramenta SQL): MySQL, SQLite...
// 2) Query Builder: Knex.js

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//routes.get();

app.listen(3333);