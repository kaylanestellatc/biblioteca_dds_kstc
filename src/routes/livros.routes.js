// ROUTE: Mapeia URLs para funções do Controller.
// Nada mais, nada menos. Sem lógica, sem processamento.

const express = require('express');
const router = express.Router();
const livrosController = require('../controllers/livros.controllers');

router.get('/', livrosController.listarLivros);
router.get('/:id', livrosController.buscarLivroPorId);
router.post('/', livrosController.criarLivro);

module.exports = router;
/*const express = require ('express');

const router = express.Router();

const livrosController = require ('../controllers/livros_controllers');



router.get('/', livrosController.listarLivros); 
router.get('/:id', livrosController.buscarlivroPorId);
router.post('/', livrosController.criar);
router.put('/:id', livrosController.atualizar);
router.delete('/:id',livrosController.deletar);
module.exports = router;*/
