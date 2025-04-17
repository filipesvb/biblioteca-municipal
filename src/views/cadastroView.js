
const view = (info) => {
    return `
    <html>
        <head>
            <link rel="stylesheet" href="/static/css/cadastro.css" />
        </head>
        <body>
            <form action="/livros" method="post">
                <input type="hidden" name="id" id="id">

                <div>
                    <label for="titulo">Titulo:</label>
                    <input type="text" name="titulo" id="titulo" />
                </div>

                <div>
                    <label for="editora">Editora:</label>
                    <input type="text" name="editora" id="editora" />
                </div>

                <div>
                    <label for="autor">Autor:</label>
                    <input type="text" name="autor" id="autor" />
                </div>

                <div>
                    <label for="descricao">Descrição</label>
                    <textarea name="descricao" id="descricao"></textarea>
                </div>

                <div>
                    <label for="preco">Preço:</label>
                    <input type="text" name="preco" id="preco" />
                </div>

                <div>
                    <label for="paginas">Páginas:</label>
                    <input type="number" name="paginas" id="paginas" />
                </div>

                <label>
                    <input type="submit" value="Enviar" />
                </label>
            </form>

        </body>
        </html>
    `
}

export default view
