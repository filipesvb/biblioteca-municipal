import view from "../views/livroView.js";
import livroModel from "../models/livrosModel.js";

class LivroController {
  static async listar(req, res) {
    try {
      const livrosResultado = await livroModel.listaLivros();
      res.status(200).json(livrosResultado);
    } catch (error) {
      res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
  static async listarAdmin(req, res) {
    try {
      const livrosResultado = await livroModel.listaLivros();
      res.status(200).send(view(livrosResultado));
    } catch (error) {
      res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
  static async buscarPorId(req, res, next) {
    try {
      const livroResultado = await livroModel.buscarPorId(req.params.id);
      return livroResultado;
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
  static async cadastrar(req, res) {
    const livro = req.body;
    console.log(livro)
    livroModel
      .cadastraLivro(livro)
      .then(res.status(201).redirect("/cadastro"))
      .catch((error) => console.log(error));
  }
  static async editar(req, res, next) {
    const novoLivro = req.body;
    console.log(novoLivro)
    try {
      await livroModel.editaLivro(novoLivro);
      res.status(200).redirect("/livros");
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro interno do servidor" });
    }
  }

  static async deletar(req, res, next) {
    const id = req.params.id;
    console.log("Deletando: " + id);
    try {
      await livroModel.deletaLivro(id);
      console.log("TESTE TESTE TESTE TESTE TESTE");
      res.status(200).send();
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  }
}

export default LivroController;
