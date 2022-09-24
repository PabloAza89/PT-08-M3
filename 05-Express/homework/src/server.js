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
const posts = ['5', '3'];
let id = posts.length

// server.METHOD(PATH, HANDLER)
// res.status(200).send('Hola mundo!');

const server = express();
server.use(express.json());

server.post(PATH, (req, res) => {
    // console.log('BODY', req.body.title) // body goes on !!
    // console.log('QUERY', req.query.title) // nope
    if (req.body.title && req.body.author && req.body.contents) res.send({"author": req.body.author, "title": req.body.title, "contents": req.body.contents, "id": id++})
    else res.status(STATUS_USER_ERROR).send({error: "No se recibieron los parámetros necesarios para crear el Post"})
})    

server.post(PATH + "/author/:author", (req, res) => {
    // console.log('AUTHOR', req.params.author) 
    if (req.body.title && req.body.contents) res.send({"author": req.params.author, "title": req.body.title, "contents": req.body.contents, "id": id++})
    else res.status(STATUS_USER_ERROR).send({error: "No se recibieron los parámetros necesarios para crear el Post"})
})

server.get(PATH, (req, res) => {
    // console.log('QUERT', req.query)
    if (req.query.hasOwnProperty('term'))  {
        let str = req.query.term
        let regex = new RegExp(`\\b${str}\\b`, "g")
        //console.log('RESPONSE', regex)        
        let result = posts.map()
        //let result = posts.filter(el => regex.test(el.title) === true || regex.test(el.contents) === true)
        //console.log('RESPONSE', result)        
        //if (result[0] !== undefined) res.send(result)
        res.send(result)
    } else res.send(posts)
})  
    
// to enable parsing of json bodies for post requests
// server.use(express.json());

// TODO: your code to handle requests


module.exports = { posts, server };
