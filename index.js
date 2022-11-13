const express = require('express');
const request = require('request');
const path = require('path');
const app = express();

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.use(express.static(path.join(__dirname, 'client/dist')));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});

