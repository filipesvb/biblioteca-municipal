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

    buscarPorId(id){
        return new Promise((resolve, reject) => {
            db.get(`
                    SELECT * FROM livros
                    WHERE id = ?
                `, [id], (error, result) => {
                if(error) {
                    console.log(error);
                    return reject(`Não foi possível buscar o livro`)
                }
                return resolve(result)
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
    },

    editaLivro(livro) {
        return new Promise((resolve, reject) => {
            db.run(
                `
                    UPDATE livros
                    SET
                        titulo = ?,
                        editora = ?,
                        autor = ?,
                        descricao = ?,
                        preco = ?,
                        paginas = ?
                    WHERE id = ?

                `
                , 
                [ livro.titulo, livro.editora, livro.autor, livro.descricao, livro.preco, livro.paginas, livro.id]
                , 
                (erro) => {
                    if(erro) {
                        console.log(erro)
                        return reject("Não deu pra atualizar o livro")
                    }
                    return resolve()
                })
        })
    },

    deletaLivro(id) {
        return new Promise((resolve, reject) => {
            db.run(
                `
                    DELETE FROM livros
                    WHERE id = ?
                `,
                [id],
                (error) => {
                    if(error) {
                        console.log(error);
                        return reject(`Não foi possível deletar o livro`)
                    }
                    return resolve();
                }
            )
        })
    }
}

export default livroModel