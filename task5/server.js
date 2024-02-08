const http = require('http');

const name = 'Guilherme';

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Contet-Type':'text/plain'})
    response.write(`Hi! I am ${name}!\n`);
    response.end();
});

server.listen(9090);

