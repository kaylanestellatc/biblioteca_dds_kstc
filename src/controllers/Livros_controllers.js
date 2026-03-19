const livrosServices = require ('../services/livros_services');

const listarLivros = async (req, res) => {
    try{
    const livros = await livrosServices.listarTodosOsLivros();
    res.status(200).json({total: livros.length, livros})

}catch(error){
    res.status(500).json({error: 'erro interno ao listar livros'});
}};

const buscarlivroPorId= async (req, res) => {
    try{
        const{id} = req.params;
        const livro =await livrosServices.buscarlivroPorId(id);

        if(!livro){
            return res 
            .status(404)
            .json({error:'livro ${id} nao encontrado no acervo'});
    };
    res.status(200).json({livro});
}
catch(error){
res.status(500).json({error:'Erro interno ao buscar o livro.'});
}
};
const criarLivro = async (req,res) =>{
    try{
        const {titulo,autor} = req.body;
        const novoLivro = await livrosServices.criarLivro({titulo,autor});

         res.status(201).json({
             mensagem: 'Livro cadastrado no acervo com sucesso!',
             livro: novoLivro
         });

        }catch(error){
            res.status(400).json({error: error.message});
        }};


module.exports = {listarLivros, buscarlivroPorId, criarLivro};
