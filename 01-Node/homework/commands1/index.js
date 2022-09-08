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
                process.stdout.write(`\n${data.toString().split(/\r?\n/).join(' ').split(' ').sort((a,b) => a.localeCompare(b)).join("\n")}`);
                //.join("\n")
                process.stdout.write('\nprompt > ');
        });
    },
    wc: function(args) {
        //fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
        fs.readFile(__dirname + '/../' + args, 'utf8', function(err, data) {
            if(err) return console.log(err);
                //console.log(data);
                //process.stdout.write(`\n${data}`);
                const lines = data.toString().split(/\r?\n/).length
                const words = data.toString().split(/\r?\n/).join(' ').split(' ').length
                const characters = data.toString().split(/\r?\n/).join(' ').split(' ').join('').split('').length
                process.stdout.write(`\nLines: ${lines}\nWords: ${words}\nCharacters: ${characters}`);
                process.stdout.write('\nprompt > ');
        });
    },
    uniq: function(args) {
        //fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
        fs.readFile(__dirname + '/../' + args, 'utf8', function(err, data) {
            if(err) return console.log(err);
                const filter1 = data.toString().split(/\r?\n/)
                const filter2 = filter1.filter((a,b) => filter1.indexOf(a) === b);
                process.stdout.write(`\n${filter2.join("\n")}`);
                //console.log(data);
                //process.stdout.write(`\n${data}`);
                //filter((a,b) => words.indexOf(a) === b);
                process.stdout.write('\nprompt > ');
        });
    },
    sortuniq: function(args) {
        //fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
        fs.readFile(__dirname + '/../' + args, 'utf8', function(err, data) {
            if(err) return console.log(err);
                const filter1 = data.toString().split(/\r?\n/).join(' ').split(' ').sort((a,b) => a.localeCompare(b));
                const filter2 = filter1.filter((a,b) => filter1.indexOf(a) === b);
                process.stdout.write(`\n${filter2.join("\n")}`);
                //console.log(data);
                //process.stdout.write(`\n${data}`);
                //filter((a,b) => words.indexOf(a) === b);
                process.stdout.write('\nprompt > ');
        });
    },
}