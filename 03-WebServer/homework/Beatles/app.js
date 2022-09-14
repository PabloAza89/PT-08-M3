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

    if(cleanUrl === '/api'){
      res.writeHead(200, { 'Content-Type':'application/json' })
      res.end( JSON.stringify(beatles) );
    } else if (req.url === `/api/${str0}` + "%20" + `${str1}` && beatles.map(e => e.name).indexOf(str0 + ' ' +str1) !== -1) {
        res.writeHead(200, { 'Content-Type':'application/json' })
        res.end( JSON.stringify(beatles[(beatles.map(e => e.name).indexOf(str0 + ' ' +str1))]));
    } 
        res.writeHead(404); //Ponemos el status del response a 404: Not Found
        res.end(); //No devolvemos nada más que el estado.
     

}).listen(3001, '127.0.0.1');