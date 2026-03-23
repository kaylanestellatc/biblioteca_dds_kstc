const express = require('express');
const router = express.Router();
const livrosRoutes = require('./src/routes/livros_routes');

router.use('/livros', livrosRoutes);

router.get?('/', (req,res) =>{
    res.json({ sistema: 'biblioteca DdS luciano', status:'online'
    });});
router.use((req,res)=>{
res
.status(404)
.json({ erro:'rota nao encontrada na biblioteca DdS luciano'
});});

module.exports = router;