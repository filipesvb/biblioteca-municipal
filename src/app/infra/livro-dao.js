class LivroDao {

    constructor(db) {
        this._db = db;
    }

    listar() {
        return new Promise((resolve, reject) => {
            this._db.all("SELECT * FROM livros", (error, results) => {
                if(error) return reject("Não foi possível listar os livros");
                return resolve(results);
            });
        });
    }

    cadastrar(livro) {
        return new Promise((resolve, reject) => {
            this._db.exec(`
                INSERT INTO livros (
                    titulo, 
                    preco,
                    descricao
                ) SELECT '${livro.nome}', ${livro.preco}, '${livro.descricao}' WHERE NOT EXISTS (SELECT * FROM livros WHERE titulo = '${livro.nome}')
                `, (error, results) => {
                    if(error) return reject("Não foi possível cadastrar o livro.");
                    console.log(livro)
                    return resolve();
                });
        });
    }

    excluir(id) {
        return new Promise((resolve, reject) => {
            console.log(`Excluido ID: ${id}`)
        });
    }
}

module.exports = LivroDao;