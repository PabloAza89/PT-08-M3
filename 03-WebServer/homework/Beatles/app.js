var http = require('http');
var fs   = require('fs');

var beatles=[{
  name: "John Lennon",
  birthdate: "09/10/1940",
  profilePic:"https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg"
},
{
  name: "Paul McCartney",
  birthdate: "18/06/1942",
  profilePic:"http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg"
},
{
  name: "George Harrison",
  birthdate: "25/02/1946",
  profilePic:"https://canaldosbeatles.files.wordpress.com/2012/02/george-george-harrison-8321345-438-600.jpg"
},
{
  name: "Richard Starkey",
  birthdate: "07/08/1940",
  profilePic:"http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg"
}
]

http.createServer( function(req, res){ 
  
  let cleanUrl = req.url.split('%20').join('')
  let str0 =  req.url.slice(5).split('%20')[0]
  let str1 =  req.url.slice(5).split('%20')[1]
  let str0Beat =  req.url.slice(1).split('%20')[0]
  let str1Beat =  req.url.slice(1).split('%20')[1]
  if( req.url === '/') {
      res.writeHead(200, { 'Content-Type':'text/html' })
      var html = fs.readFileSync(__dirname +'/html/index.html', 'utf8'); 
      var nombre = 'Soy Henry!'; 
      html = html.replace('{nombre}', nombre);
      res.end(html);
  } else if(cleanUrl === '/api'){
      res.writeHead(200, { 'Content-Type':'application/json' })
      res.end( JSON.stringify(beatles) );
  } 
  
  else if (req.url === `/${str0Beat}` + "%20" + `${str1Beat}`) {
      res.writeHead(200, { 'Content-Type':'text/html' })
      var html = fs.readFileSync(__dirname +'/html/beatle.html', 'utf8');
      var nombre = beatles[(beatles.map(e => e.name).indexOf(str0Beat + ' ' +str1Beat))].name
      var fecha = beatles[(beatles.map(e => e.name).indexOf(str0Beat + ' ' +str1Beat))].birthdate
      var image = beatles[(beatles.map(e => e.name).indexOf(str0Beat + ' ' +str1Beat))].profilePic
      html = html.replace('{nombre}', nombre);
      html = html.replace('{fecha}', fecha);
      html = html.replace('{image}', image);
      res.end(html);


  
}
  
  
  else if (req.url === `/api/${str0}` + "%20" + `${str1}` && beatles.map(e => e.name).indexOf(str0 + ' ' +str1) !== -1) {
      res.writeHead(200, { 'Content-Type':'application/json' })
      res.end( JSON.stringify(beatles[(beatles.map(e => e.name).indexOf(str0 + ' ' +str1))]));
  }  else {
    res.writeHead(404); 
    res.end(); 
  }  

}).listen(3001, '127.0.0.1');