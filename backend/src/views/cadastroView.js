import LivroController from "../controllers/livroController.js"

const view = async (req, res, next) => {
    let livro = {id: "", titulo: "", editora: "", autor: "", descricao: "", preco: "", imagem: ""}
    if(req.params.id) {
        livro = await LivroController.buscarPorId(req)
    }

    res.status(200).send(`
        <html>
        <head>
            <link rel="stylesheet" href="/static/css/cadastro.css" />
        </head>
        <body>
            
            <form action="/livros" method="POST">
                ${(livro.id) ? `<input type="hidden" name="_method" value="PUT">` : ''}
                <input type="hidden" name="id" id="id" value="${livro.id}">

                <div>
                    <label for="titulo">Titulo:</label>
                    <input type="text" name="titulo" id="titulo" value="${livro.titulo}"/>
                </div>

                <div>
                    <label for="editora">Editora:</label>
                    <input type="text" name="editora" id="editora" value="${livro.editora}" />
                </div>

                <div>
                    <label for="autor">Autor:</label>
                    <input type="text" name="autor" id="autor" value="${livro.autor}" />
                </div>

                <div>
                    <label for="descricao">Descrição</label>
                    <textarea name="descricao" id="descricao">${livro.descricao}</textarea>
                </div>

                <div>
                    <label for="preco">Preço:</label>
                    <input type="text" name="preco" id="preco" value="${livro.preco}"/>
                </div>

                <div>
                    <label for="paginas">Páginas:</label>
                    <input type="number" name="paginas" id="paginas" value="${livro.paginas}"/>
                </div>

                <div>
                    <label for="imagem">Imagem de capa:</label>
                    <input type="text" name="imagem" id="imagem" value="${livro.imagem}"/>
                </div>

                <label>
                    <input type="submit" value="Enviar" />
                </label>
            </form>

        </body>
        </html>
    `)
}

export default view
