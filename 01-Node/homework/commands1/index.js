var fs = require('fs');
var request = require('request');

module.exports = {
    pwd: function() {
        process.stdout.write(process.cwd());
    },
    date: function() {
        process.stdout.write(Date());
    },
    ls: function() {
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
              process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("prompt > ");
        });
    },
    echo: function(args) {
        process.stdout.write(args);
    },
    curl: function(args) {     
        request(args, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            //console.log(body) // Show the HTML for the Google homepage. 
            process.stdout.write(body)
            process.stdout.write('\nprompt > ');
        } else {
            //console.log("Error "+response.statusCode)
            process.stdout.write('Error ' + response.statusCode)
            process.stdout.write('\nprompt > ');
        }})
        
    },
    sort: function(args) {
        //fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
        fs.readFile(__dirname + '/../' + args, 'utf8', function(err, data) {
            if(err) return console.log(err);
                //console.log(data);
                //process.stdout.write(`\n${data}`);
                process.stdout.write(`\n${data.toString().split(/\r?\n/).sort((a,b) => a.localeCompare(b)).join("\n")}`);
                process.stdout.write('\nprompt > ');
        });
    }
}