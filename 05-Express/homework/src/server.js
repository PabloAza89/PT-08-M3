// const bodyParser = require("body-parser");
const express = require("express");

const STATUS_USER_ERROR = 422;

const STATUS_OK = 200;
const STATUS_NOT_FOUND = 404;
const STATUS_SERVER_ERROR = 500;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
//const posts = [];
let posts = [];

// server.METHOD(PATH, HANDLER)
// res.status(200).send('Hola mundo!');

const server = express();
server.post("/posts", (req, res) => {
    //if (typeof req.body.author !== 'string') res.status(422).send({error: "No se recibieron los parámetros necesarios para crear el Post"})
    if (typeof req.body.author !== 'string') return res.status(500)
})    
    
// to enable parsing of json bodies for post requests
// server.use(express.json());

// TODO: your code to handle requests


module.exports = { posts, server };
