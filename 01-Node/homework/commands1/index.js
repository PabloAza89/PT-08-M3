var fs = require('fs');
var request = require('request');  


module.exports = {
    pwd: function(file) {
        process.stdout.write(process.cwd());
    },
    date: function(file) {
        process.stdout.write(Date());
    },
    ls: function(file, done) {
        var output = "";
        fs.readdir('.', function(err, files) {
          files.forEach(function(file) {
            output += file.toString() + "\n";
          })
          done(output);
        });      
    },
    echo: function(file) {
        process.stdout.write(file.slice(5));
    },
    curl: function(file) {     
        request(file.slice(5), function (error, response, body) {
        if (!error && response.statusCode == 200) {
            //console.log(body) // Show the HTML for the Google homepage. 
            process.stdout.write(body)
        } else {
            //console.log("Error "+response.statusCode)
            process.stdout.write('Error ' + response.statusCode)
        }})
    }
}