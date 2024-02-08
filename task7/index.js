const express = require('express')
const bodyParser = require('body-parser')
const server = express()

server.use(bodyParser.json())


const persons = []

server.post('/persons', (req, res) => {
    const newPerson = req.body
    persons.push(newPerson)
    res.status(201).json(newPerson)
})

server.get('/persons', (req, res) => {
    res.json(persons)
})





server.listen(9090, () => {
    console.log('Servidor Funcionando!')
})
