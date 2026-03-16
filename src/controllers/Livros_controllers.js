const LivrosServices = require ('../services/Livros_services');

const listarLivros = async (req, res) => {
    try{
    const livros = await LivrosServices.listarTodosOsLivros();
    res.status(200).json({total:Livros.length, livros})

}catch(erro){
    res.status(500).json({erro: 'erro interno ao listar livros'});
}};


module.exports = {listarLivros};
