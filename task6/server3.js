
const url = "http://localhost:8080/person/John"

const urlObject = new URL(url)

const nome = {
    person: {name: urlObject.pathname.slice(8)
}
}   

const jsonData2 = JSON.stringify(nome)

const objs = [
  {
    name: 'Guilherme',
    age: 42,
    estaTrabalhando: true,
    detalhesProfissao: {
      profissao: 'Programador',
      empresa: 'Empresa X',
    },
    hobbies: ['Futebol', 'Games', 'Programar'],
  },
]

const jsonData = JSON.stringify(objs)

console.log(objs)
console.log(jsonData)
console.log(jsonData2)

//const jsonData2 = JSON.stringify(nome)

//console.log(jsonData)
//console.log(urlArray)

/*
const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type':'application/json'})
  //response.write('person: ' + '{name: ' + jsonData2 + '}' + '\n');
 // response.write(`person: {name: "${nome}"}\n`);
  response.write('person: ' + '{name: ' + jsonData2 + '}' + '\n');
  //response.write(jsonData)
  response.end();
});
*/