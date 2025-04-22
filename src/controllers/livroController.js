import view from "../views/livroView.js";
import livroModel from "../models/livrosModel.js";


class LivroController {

    static async listar(req, res) {
        try{
            const livrosResultado = await livroModel.listaLivros()
            res.status(200).send(view(livrosResultado))
        } catch( error ) {
            res.status(500).json({message: "Erro interno do servidor"})
        }
        
        
    }
    static async buscarPorId(req, res, next) {
        try {
            const livroResultado = await livroModel.buscarPorId(req.params.id);
            res.status(200).send(view([livroResultado]))
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "Erro interno do servidor"})
        }

    }
    static async cadastrar(req, res) {
        const livro = req.body;
        livroModel.cadastraLivro(livro)
        .then(
            res.status(201).redirect("/livros")
        )
        .catch(error => console.log(error))
    }
    static async editar(req, res) {

    }

}

export default LivroController;