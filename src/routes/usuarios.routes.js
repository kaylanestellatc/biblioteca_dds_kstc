const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarios.controller');

router.get('/', usuarioController.listarUsuarios);
router.get('/:id', usuarioController.buscarUsuarioPorId);
router.post('/', usuarioController.criarUsuario);

module.exports = router;
