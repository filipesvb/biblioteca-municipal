import sqlite3 from "sqlite3";
sqlite3.verbose();
const db = new sqlite3.Database('data.db');

const CRIA_TABELA = `
    CREATE TABLE livros (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        editora TEXT,
        autor TEXT,
        descricao TEXT,
        preco REAL,
        paginas INTEGER
    );
`

db.serialize(() => {
    db.run(CRIA_TABELA);

    const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    for (let i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }
    stmt.finalize();

    db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
        console.log(row.id + ": " + row.info);
    });
});

db.close();
