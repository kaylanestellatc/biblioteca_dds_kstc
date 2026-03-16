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
        disponivel:True,
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
    }

];
const listarTodosOsLivros = async () => {
return acervo;
};

module.exports = {listarTodosOsLivros};