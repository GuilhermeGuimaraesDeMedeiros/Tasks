const http = require('http');

const url = "http://localhost:8080/person/John"

const urlObject = new URL(url)

const nome = {
  person: {name: urlObject.pathname.slice(8)
}
}   

const jsonData = JSON.stringify(nome)



const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type':'application/json'})
  response.write(jsonData + '\n');
   response.end();
});

server.listen(8080);


