const express = require('express');

var api = require('./api/routes');

const app = express();



app.use(express.static(__dirname + '/dist/app-inhaus'));

app.use('/api',api);

app.all('*', (req, res) => {
    res.status(200).sendFile(__dirname + '/dist/app-inhaus/index.html');
});

app.listen(process.env.PORT || 8080);