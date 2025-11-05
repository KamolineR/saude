const { Sequelize } = require('sequelize');

const conexao = new Sequelize('sistema_de_triagem_hospitalar)', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = conexao;