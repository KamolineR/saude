const express = require('express');
const app = express();

const triagemController = require('./src/controllers/triagemCOntroller');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//rotas

module.exports = app;