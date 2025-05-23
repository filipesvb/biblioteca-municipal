
const view = (livros) => {
    return `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Livros</title>
        </head>
        <body>

            <h1>Livros</h1>
            <span>
                <a href="/cadastro">Cadastrar Livros</a>
            </span>
            <Table border class="tabela_livros">
                <tr>
                    <td>Id</td>
                    <td>Titulo</td>
                    <td>Editar</td>
                    <td>Excluir</td>
                </tr>
                ${livros.map(livro => {
                    return `
                        <tr class="livro_${livro.id}">
                            
                            <td>${livro.id}</td>
                            <td>${livro.titulo}</td>
                            <td><a href="/cadastro/${livro.id}">Editar</a></td>
                            <td><a href="#" data-ref="${livro.id}" data-type="remocao">Excluir</a></td>
                            
                        </tr>
                    `
                }).join('')}
            </Table>

            <script src="/static/js/deletaLivro.js"></script>
        </body>
        </html>
    `
}

export default view;