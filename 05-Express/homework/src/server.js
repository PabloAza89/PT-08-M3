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
    if (req.body.title && req.body.author && req.body.contents) res.send({"author": req.body.author, "title": req.body.title, "contents": req.body.contents, "id": id++})
    else res.status(STATUS_USER_ERROR).send({error: "No se recibieron los parámetros necesarios para crear el Post"})
})    

server.post(PATH + "/author/:author", (req, res) => {
    // console.log('AUTHOR', req.params.author) 
    if (req.body.title && req.body.contents) res.send({"author": req.params.author, "title": req.body.title, "contents": req.body.contents, "id": id++})
    else res.status(STATUS_USER_ERROR).send({error: "No se recibieron los parámetros necesarios para crear el Post"})
})

server.get(PATH, (req, res) => {
    if (req.query.term.length > 0)  {
        
        let str = req.query.term.toString()
        let regex = new RegExp(`${str}\\b`, "g");
        let result = posts.filter(el => regex.test(el.title) === true || regex.test(el.contents) === true)
        if (result[0] !== undefined) res.send(result)
        else res.send(posts)
    } else res.send(posts)
})  

    
// to enable parsing of json bodies for post requests
// server.use(express.json());

// TODO: your code to handle requests


module.exports = { posts, server };
