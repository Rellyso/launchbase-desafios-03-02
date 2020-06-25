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
    express: server,
    // permitir ler html
    autoescape: false,
    noCache: true
})

// 4 - renderizar página principal (/) com o get (req, res) retornando res.render('index')
server.get('/', function (req, res) {
    const about = {
        name: "Rocketseat",
        img: "https://rocketseat.gallerycdn.vsassets.io/extensions/rocketseat/rocketseatreactnative/3.0.1/1588456740326/Microsoft.VisualStudio.Services.Icons.Default",
        description: 'Uma plataforma de educação em tecnologia, somos uma comunidade incrível de programadores em busca do próximo nível. Acesse <a href="http://rocketseat.com.br" target="_blank" rel="noopener noreferrer">Rocketseat</a>.',
        technologies: [
            {name: "Javascript"},
            {name: "HTML"},
            {name: "CSS"},
            {name: "Nunjucks"},
            {name: "SQL"}
        ]
    }
    return res.render('about', {about})
} )

server.get('/courses', (req, res) => {
    return res.render('courses', {courses})
})

server.get('/courses/:id', function (req, res) {
    
    const id = req.params.id

    const course = courses.find(function (course) {
        return course.name == id
    })

    if ( !course ) {
        return res.render('not-found')
    }

    return res.render('course', {course})
})

server.use(function (req,res) {
    res.status(404).render('not-found')
})


// 1 - configurando porta do servidor 
server.listen(5000, function () {
    console.log('server is running')
})