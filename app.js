const express = require('express');
const app = express();

const triagemController = require('./src/controllers/triagemCOntroller');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//rotas
app.use('/api/triagem', triagemController);

module.exports = app;