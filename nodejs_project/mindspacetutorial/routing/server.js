var http = require('http');
var requestHandler = require('./app');

http.createServer(requestHandler.handleRequest).listen(3000);