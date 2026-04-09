// ROUTE: Mapeia URLs para funções do Controller.
// Nada mais, nada menos. Sem lógica, sem processamento.

const router = require('express').Router();
const livroController = require('../controllers/livros.controllers');

router.get('/', livroController.listarLivros);
router.get('/:id', livroController.buscarLivroPorId);
router.post('/', livroController.criarLivro);

module.exports = router;
