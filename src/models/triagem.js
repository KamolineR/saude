const { DataTypes } = require('sequelize');
const conexao = require('../config/database');

const Triagem = conexao.define('Triagem', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    queixa: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    prioridade: {
        type: DataTypes.ENUM('alta', 'media', 'baixa'),
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('aguardando', 'atendendo', 'finalizado'),
        defaultValue: 'aguardando'
    }

},  {
    tableName: 'triagens',
    timestamps: true
});

Triagem.sync()

module.exports = Triagem;