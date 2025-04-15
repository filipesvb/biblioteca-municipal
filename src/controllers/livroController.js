import view from "../views/livroView.js"

const livros = [
    {
        id: 1,
        titulo: "Harry Potter"
    },
    {
        id: 2,
        titulo: "O Senhor dos Anéis"
    }
]

class LivroController {

    static async listar(req, res) {
        res.status(200).send(view(livros))
    }

}

export default LivroController;