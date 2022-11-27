var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('Welcome to Edureka !!')
    res.end()
}).listen(9001);
