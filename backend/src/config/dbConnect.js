import sqlite3 from "sqlite3";
sqlite3.verbose();
const db = new sqlite3.Database('data.db', (error) => {
    if(error) {
        console.log("Erro ao conectar com o banco de dados! - " + error.message)
    } else {
        console.log("Conectado ao banco de dados =)")
    }
});

const CRIA_TABELA = `
    CREATE TABLE livros (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        editora TEXT,
        autor TEXT,
        descricao TEXT,
        preco REAL,
        paginas INTEGER,
        imagem TEXT NOT NULL
    );
`

db.serialize(() => {
    // db.run(CRIA_TABELA, (error) => {
    //     if(error) {
    //         console.log("Não foi possível criar a tabela");
    //     } else {
    //         console.log("Tabela criada com sucesso!");
    //     }
    // });

});

process.on('SIGINT', () => {
    console.log('Fechando a conexão com o banco...');
    db.close((err) => {
        if (err) {
            console.error('Erro ao fechar o banco:', err.message);
        } else {
            console.log('Banco de dados fechado.');
        }
        process.exit(0); // Finaliza o processo Node com sucesso
    });
});

export default db;