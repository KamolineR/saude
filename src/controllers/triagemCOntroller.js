const { Triagem } = require('../models');

const triagemController = {

    async adicionar(req, res) {
        try {

        const { nome, idade, telefone, queixa, prioridade } = req.body;

        if (!nome || !idade || !telefone || !queixa || !prioridade) {
            return res.status(400).json({error: 'Todos os campos são obrigatórios'});
        }

        if (!['alta', 'media', 'baixa'].includes(prioridade)) {
            return res.status(400).json({ error: 'Prioridade deve ser: alta, media ou baixa' });
        }

        const triagem = await Triagem.create({ nome, idade, telefone, queixa, prioridade });

        res.status(201).json({ message: 'Paciente adicionado à fila', triagem });

        } catch (error) {
            res.status(500).json({ error: 'Erro ao adicionar triagem' });
        }
    },

    async listar(req, res) {
        try {

        const triagens = await Triagem.findAll({
            order: [
            ['prioridade', 'ASC'],
            ['createdAt', 'ASC'] 
            ]
        });

        return res.status(200).json(triagens);

        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar triagens' });
        }
    },


    async atualizarStatus(req, res) {
        try {

        const { id } = req.params;
        const { status } = req.body;

        if (!['aguardando', 'atendendo', 'finalizado'].includes(status)) {
            return res.status(400).json({ error: 'Status inválido' });
        }

        const triagem = await Triagem.findByPk(id);

        if (!triagem) {
            return res.status(404).json({ error: 'Triagem não encontrada' });
        }

        await triagem.update({ status });

        return res.status(200).json({ message: 'Status atualizado', triagem });

        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar status' });
        }
    },


    async remover(req, res) {
        try {

        const { id } = req.params;

        const triagem = await Triagem.findByPk(id);

        if (!triagem) {
            return res.status(404).json({ error: 'Triagem não encontrada' });
        }

        await triagem.destroy();
        res.status(200).json({ message: 'Triagem removida' });

        } catch (error) {
            res.status(500).json({ error: 'Erro ao remover triagem' });
        }
    }
};

module.exports = triagemController;