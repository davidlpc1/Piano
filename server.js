const express = require('express');
const server = express();

server.use(express.static("public"))

server.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
})

server.get('/contato', (req, res) => {
    res.send(`Contato`);
})

server.get('/easter-egg', (req, res) => {
    res.send(`Parabens`);
})

server.get('/github', (req, res) => {
    res.send(`Github`);
})

server.listen(3300)