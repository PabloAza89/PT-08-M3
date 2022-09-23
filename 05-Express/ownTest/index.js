var express = require("express");
var app = express();
var morgan = require('morgan')

// postman, insomnia, thunderclient, morgan

app.listen(3000);

app.use(morgan('dev'));
app.get("/", function (req, res) {
      res.send("Hola");
  });

  app.get("/api", function (req, res) {
    var obj = {
      nombre: "prueba",
      framework: "express",
      ventaja: "serializó por nosotros",
    };
    res.json(obj);
  });

  app.get("/abc?de", function (req, res) { // 'c' can be or not
    res.send("abc?de");
  });

// app.get("/abc*de", function (req, res) { // 'c' can repeat
//     res.send("abc*de");
//   });

  app.get("/api/:id", function (req, res) {
    res.json({ parametro: req.params.id });
  });

//   app.use("/", function (req, res, next) {
//     console.log("Hicieron un Request a " + req.url);
//     next();
//   });


// http://localhost:3000/datos?propiedad=valor
// http://localhost:3000/datos?propiedad=valor&hola=como%20estas
app.get("/datos/", function (req, res) {
    res.json(req.query);
  });

app.get("/form", function (req, res) {
res.send(
    '<html><head> \
    <link href="/assets/style.css" rel="stylesheet"> \
    </head><body>\
    <form method="POST" action="/form">\
    Nombre <input name="nombre" type="text"><br>\
    Apellido <input name="apellido" type="text"><br>\
    Curso <input name="curso" type="text"><br>\
    <input type="submit">\
    </form>\
    </body></html>'
);
});

app.use(express.urlencoded({ extended: false }));
app.post("/form", function (req, res) {
res.json(req.body);
});  

//

app.use(express.json());
app.post("/formjson", function (req, res) {
  res.json(req.body);
});
