const express = require('express');
const serveStatic = require('serve-static');

const port = process.env.PORT || 3000;

app = express();

app.use(serveStatic(__dirname + '/dist'));
app.listen(port);
console.log('server started at port: ' + port);
