import view from "../views/livroView.js";
import livroModel from "../models/livrosModel.js";


class LivroController {

    static listar(req, res) {
        livroModel.listaLivros()
        .then(results => {
            res.status(200).send(view(results))
        })
        .catch(error => console.log(error))
    }
    static buscarPorId(id) {
        livroModel.buscarPorId(id)
    }
    static cadastrar(req, res) {
        const livro = req.body;
        livroModel.cadastraLivro(livro)
        .then(
            res.status(201).redirect("/livros")
        )
        .catch(error => console.log(error))
    }
    static editar(req, res) {

    }

}

export default LivroController;