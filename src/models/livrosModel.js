import db from "../config/dbConnect.js";

const livroModel = {
    
    listaLivros() {
        return new Promise((resolve, reject) => {
            db.all(
                `
                    SELECT * FROM livros
                `
                , (erro, results) => {
                if(erro) {
                    console.log(erro);
                    return reject("Não foi possível listar os livros")
                }
                return resolve(results)
            })
        })
    },

    cadastraLivro(livro) {
        return new Promise((resolve, reject) => {
            console.log(`Livro: ` , livro)
            db.all(`
                    INSERT INTO livros (
                        titulo,
                        editora,
                        autor,
                        descricao,
                        preco,
                        paginas
                    ) VALUES (?,?,?,?,?,?)
                `, 
                [
                    livro.titulo,
                    livro.editora,
                    livro.autor,
                    livro.descricao,
                    livro.preco,
                    livro.paginas
                ]
                , 
                (error) => {
                if(error) {
                    console.log(error);
                    return reject(`Não foi possível cadastrar o livro`);
                }
                return resolve();
            })
        })
    }
}

export default livroModel