
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
            <table border>
                <tr>
                    <td>Id</td>
                    <td>Titulo</td>
                    <td>Editar</td>
                    <td>Excluir</td>
                </tr>
                ${livros.map(livro => {
                    return `
                        <tr>
                            
                            <td>${livro.id}</td>
                            <td>${livro.titulo}</td>
                            <td><a href="#">Editar</a></td>
                            <td><a href="#">Excluir</a></td>
                            
                        </tr>
                    `
                }).join('')}
            </table>
        </body>
        </html>
    `
}

export default view;