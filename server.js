const app = require("./src/config/_express");

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080")
})

app.get("/", (req, res) => {
    res.send(`
            <html>
            <body>
                <h1>Página inicial</h1>
            </body>
            </html>
        `);
})