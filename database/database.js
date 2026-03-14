const sqlite3 = require ('sqlite3').verbose();

const db = new sqlite3.Database('./aspirantes.db', (err) => {
    if (err){
        console.error(err.message);
    }
    console.log('Conectado a la BD');
});

db.run(`
    CREATE TABLE IF NOT EXISTS aspirantes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    correo TEXT,
    telefono TEXT
    )    
`);
module.exports = db;