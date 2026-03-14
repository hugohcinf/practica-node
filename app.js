const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/database');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/index.html');
});
app.post('/registro',(req,res) => {
    const { nombre, correo, telefono } = req.body;
    const query = `
        INSERT INTO aspirantes (nombre, correo, telefono)
        VALUES (?,?,?)
    `;
    db.run(query, [nombre,correo,telefono],function(err){
        if (err){
            return res.send("Error al insertar al aspirante");
        }
        res.send("Registro exitoso");
    });
});
app.listen(3000,()=>{
    console.log("Servidor en ejecución http://localhost:3000");
});