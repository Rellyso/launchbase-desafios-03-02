const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

const courses = require('./data')

// 5 - configurando para utilizar estilos na pasta estática public/
server.use(express.static('public'))

// 3 - setar mecanismo de visualização como o html
server.set("view engine", "njk")

// 2 - configurar nunjucks para o servidor procurar na pasta views
nunjucks.configure('views', {
    express: server
})

// 4 - renderizar página principal (/) com o get (req, res) retornando res.render('index')
server.get('/', function (req, res) {
    return res.render('about')
} )

server.get('/courses', (req, res) => {
    return res.render('courses')
})

server.use(function (req,res) {
    res.status(404).render('not-found')
})

// 1 - configurando porta do servidor 
server.listen(5000, function () {
    console.log('server is running')
})