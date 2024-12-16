const express = require('express');
const app = express();

const Usuario = require('./model/usuario.js');

app.get('/', async (req, res) => {
    const usuario = await Usuario.findByPk('example');
    res.send(usuario.toJSON());
});

console.log('Listening 9898');
app.listen(9898);