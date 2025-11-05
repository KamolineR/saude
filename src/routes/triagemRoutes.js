const express = require('express');
const router = express.Router();
const triagemController = require('../controllers/triagemCOntroller');

router.get('/', triagemController.listar);
router.post('/', triagemController.adicionar);
router.put('/:id/status', triagemController.atualizarStatus);
router.delete('/:id', triagemController.remover);

module.exports = router;