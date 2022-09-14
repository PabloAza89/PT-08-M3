var fs  = require("fs")
var http  = require("http")

http.createServer( function(req, res){
  let item = req.url.slice(1,-4).split("_")
  if( req.url === `/${item[0]}` + "_" + `${item[1]}` + ".jpg") {
    fs.readFile(__dirname + '/images/' + item[0] + '_' + item[1] + '.jpg', function(err, data) {
        res.writeHead(200, {'Content-Type': 'image/jpeg'})
        res.end(data)
    })
  } else {
    res.writeHead(404); 
    res.end(); 
  }  
}).listen(3001, '127.0.0.1');