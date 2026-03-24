const acervo = [{
    id:01,
    titulo:"o morro dos ventos uivantes",
    autor:"Emily Brontë",
    disponivel:true,
    },
    {
        id:02,
        titulo:"os ratos",
        autor:"Dyonelio machado",
        disponivel:false,
    },
    {
        id:03,
        titulo:"1948",
        autor:"george orwell",
        disponivel:true,
    },
    {
        id:04,
        titulo:"animal farm",
        autor:"george orwell",
        disponivel:true,
    },
    {
        id:05,
        titulo:"senhor dos aneis",
        autor:"tolkien",
        disponivel:true,
    },

];


const listarTodosOsLivros = async() => {
return acervo;
};

const buscarLivroPorId = async (id)=> {
const livro = acervo.find((l) => l.id === number (id));
return livro|| null;
};

const criarlivro = async ({titulo, autor}) => {
    if (!titulo|| !autor) {
    throw new Error('titulo e autor são obrigatórios');
    }
    const novolivro = {
        id: acervo.length +1,
        titulo,
        autor,
        disponivel: true,
    };
    acervo.push(novolivro);
    return novolivro;
};

module.exports = { listarTodosLivros, buscarLivroPorId, criarLivro };