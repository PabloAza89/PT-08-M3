const commands = require('./commands');
    
/* // Output un prompt
process.stdout.write('prompt > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remueve la nueva línea
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nYou typed: ' + cmd);
  process.stdout.write('\nprompt > ');
  //process.exit()
  //console.log(process)
  
}); */

/* process.stdout.write('prompt > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remueve la nueva línea
  //console.log(process)

  if(cmd === 'date' || cmd === 'Date' || cmd === 'DATE') {
    process.stdout.write(Date());  
  }
  if(cmd === 'pwd' || cmd === 'Pwd' || cmd === 'PWD') {
    process.stdout.write(process.cwd());
  }
  process.stdout.write('\nprompt > ');
}); */

    // Output un prompt
    process.stdout.write('prompt > ');
    // El evento stdin 'data' se dispara cuando el user escribe una línea
    process.stdin.on('data', function (data) {
      var cmd = data.toString().trim(); // remueve la nueva línea
      process.stdout.write('You typed: ' + cmd);
      process.stdout.write('\nprompt > ');
    });