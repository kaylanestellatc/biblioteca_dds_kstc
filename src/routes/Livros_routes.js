const express = require ('express');

const router = express.Router();

const livrosController = require ('../controllers/livros_controllers');



router.get('/', livrosController.listarLivros); 
router.get('/:id', livrosController.buscarlivroPorId);
router.post('/', livrosController.criar);
router.put('/:id', livrosController.atualizar);
router.delete('/:id',livrosController.deletar);
module.exports = router;