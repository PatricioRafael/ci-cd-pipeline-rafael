const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('API funcionando'));
app.get('/sum', (req, res) => {
    const { a, b } = req.query;
    if (isNaN(a) || isNaN(b)) return res.status(400).send('Parámetros inválidos');
    res.send({ result: Number(a) + Number(b) });
});
app.get('/error', (req, res) => {
    throw new Error("Ruta de error");
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal');
});

module.exports = app;
