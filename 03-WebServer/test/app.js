var http = require('http');
var fs   = require('fs'); //Importamos el módulo fs que nos permite leer y escribir archivos del file system

http.createServer( function(req, res){ 
    if( req.url === '/'){
        res.writeHead(200, { 'Content-Type':'text/html' })
        var html = fs.readFileSync(__dirname +'/html/index.html');
        res.end(html);
       }else if(req.url === '/api'){
        res.writeHead(200, { 'Content-Type':'application/json' })
        var obj = {
         nombre: 'Juan',
         apellido: 'Perez'
        }; 
        res.end( JSON.stringify(obj) );
       } else{
        res.writeHead(404); //Ponemos el status del response a 404: Not Found
        res.end(); //No devolvemos nada más que el estado.
       }   
 
 /* res.writeHead(200, { 'Content-Type':'text/html' })
 var html = fs.readFileSync(__dirname +'/html/template.html', 'utf8'); //Codificamos el buffer para que sea una String
 var nombre = 'Soy Henry'; //Esta es la variable con la que vamos a reemplazar el template
 html = html.replace('{nombre}', nombre); // Usamos el método replace es del objeto String
 res.end(html);
 */
}).listen(1337, '127.0.0.1');