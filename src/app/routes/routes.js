const db = require("../../config/database");
const LivroDao = require("../infra/livro-dao");

module.exports = (app) => {

    app.get("/", (req, res) => {
        res.send(`
                <html>
                <body>
                    <h1>Página inicial</h1>
                    <a href="/livros">Livros</a>
                </body>
                </html>
            `);
    })
    app.get("/livros", (req, res) => {

        const livroDao = new LivroDao(db);
        livroDao.listar()
            .then(livros => {
                res.marko(require("../views/livros/lista/lista.marko"), {
                    livros: livros,
                    excluirFunc: livroDao.excluir
                });
            })
            .catch(error => console.log(error));

    })

    app.get("/livros/cadastro", (req, res) => {

        res.marko(require("../views/livros/form/form.marko"));

    })

    app.post("/livros", (req, res) => {

        const livroDao = new LivroDao(db);
        livroDao.cadastrar(req.body)
            .then(() => {
                console.log("Livro adicionado com sucesso!");
                console.log("Mudando de página...")
            })
            .catch(error => console.log(error));

    })
}