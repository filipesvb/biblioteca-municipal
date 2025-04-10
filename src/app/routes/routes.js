const db = require("../../config/database");

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

        db.all("SELECT * FROM livros", (error, results) => {

            res.marko(require("../views/livros/lista/lista.marko"), {
                livros: results
            });
        });

    })
}