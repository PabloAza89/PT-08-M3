// const bodyParser = require("body-parser");

const express = require("express");

const STATUS_USER_ERROR = 422;

const STATUS_OK = 200;
const STATUS_NOT_FOUND = 404;
const STATUS_SERVER_ERROR = 500;

const PATH = '/posts';

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
//const posts = [];
const posts = [];
let id = posts.length

// server.METHOD(PATH, HANDLER)
// res.status(200).send('Hola mundo!');

const server = express();
server.use(express.json());

server.post(PATH, (req, res) => {
    // console.log('BODY', req.body.title) // body goes on !!
    // console.log('QUERY', req.query.title) // nope
    if (req.body.title && req.body.author && req.body.contents) {
        posts.push({"author": req.body.author, "title": req.body.title, "contents": req.body.contents, "id": id++})
        res.send(posts[posts.length - 1])
    }
    else res.status(STATUS_USER_ERROR).send({error: "No se recibieron los parámetros necesarios para crear el Post"})
})    

server.post(PATH + "/author/:author", (req, res) => {
    // console.log('AUTHOR', req.params.author) 
    if (req.body.title && req.body.contents) res.send({"author": req.params.author, "title": req.body.title, "contents": req.body.contents, "id": id++})
    else res.status(STATUS_USER_ERROR).send({error: "No se recibieron los parámetros necesarios para crear el Post"})
})

server.get(PATH, (req, res) => {
    if (req.query.hasOwnProperty('term'))  {
        let str = req.query.term
        let regex = new RegExp(`\\b${str}\\b`, "g")
        let result = posts.filter(el => regex.test(el.title) === true || regex.test(el.contents) === true)
        if (result[0] !== undefined) res.send(result)
    } else res.send(posts)
})  

server.get(PATH + "/:author", (req, res) => {
    // console.log('ASD', req.params.author)
    let str = req.params.author
    //let regex = new RegExp(`\\b${str}\\b`, "g")
    let result = posts.filter(e => e.author === str)
    if (result[0] !== undefined) res.send(result)
    else res.status(STATUS_USER_ERROR).send({error: "No existe ningun post del autor indicado"})
})  

server.get(PATH + "/:author/:title", (req, res) => {
    let authorVar = req.params.author
    let titleVar = req.params.title
    let resAll = posts.filter(e => e.author === authorVar && e.title === titleVar)
    if (resAll[0] !== undefined) res.send(resAll)
    else return res.status(STATUS_USER_ERROR).send({error: "No existe ningun post con dicho titulo y autor indicado"})
})  

server.put(PATH ,(req, res) => {
    if (!req.body.title) return res.status(STATUS_USER_ERROR).json({error: "Falta el parametro title"})
    if (!req.body.contents) return res.status(STATUS_USER_ERROR).json({error: "Falta el parametro contents"})
    if (!req.body.id) return res.status(STATUS_USER_ERROR).json({error: "Falta el parametro id"})
    if (!req.body.title && !req.body.contents && !req.body.id) return res.status(STATUS_USER_ERROR).json({error: "Faltan los 3 parametros"})
    let index = req.body.id
    let checkIndex = posts.filter(e => e.id === index)
    if (checkIndex[0] === undefined) res.status(STATUS_USER_ERROR).json({error: "No existe ningun post con dicho id indicado"})
    else {
        let indexToModify = posts.map(e => e.id).indexOf(checkIndex[0].id)
        Object.assign(posts[indexToModify], {title: req.body.title, contents: req.body.contents, id: posts[indexToModify].id})
        res.json(posts[indexToModify])
    }
})

server.delete(PATH ,(req, res) => {
    // months.splice(1, 1) // index, amount
    // console.log("AAA",req.body.id)
    // [{id: 36},{id: 37}] // to delete: 36
    let index = req.body.id
    if (index === undefined) return res.status(STATUS_USER_ERROR).json({error: "Falta el parametro id"})
    let checkIndex = posts.filter(e => e.id === index)
    if (checkIndex[0] === undefined) res.status(STATUS_USER_ERROR).json({error: "No existe ningun post con dicho id indicado"})
    else {
        let indexToDelete = posts.map(e => e.id).indexOf(checkIndex[0].id)
        posts.splice(indexToDelete, 1)
        res.json({ success: true })
    }
})

server.delete("/author" ,(req, res) => {
    let stringAuthor = req.body.author   
    if (stringAuthor === undefined) res.status(STATUS_USER_ERROR).json({error: "No existe ningun author con dicho id indicado"})
    let checkAuthor = posts.filter(e => e.author === stringAuthor)
    let filter1 = checkAuthor.map(e => e.id)
    let filter2 = filter1.sort((a,b) => a - b) // ARRAY WITH INDEXES
    console.log("AAA", filter2)
    // let indexesToSearch = []
    // do {
    //     let qq = posts.pop()
    //     qq
    //     indexesToSearch
    // }
    //let indexToDelete = posts.map(e => e.id).indexOf(checkAuthor[0].id)

})

// to enable parsing of json bodies for post requests
// server.use(express.json());

// TODO: your code to handle requests


module.exports = { posts, server };
