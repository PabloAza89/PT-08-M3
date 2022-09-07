const commands = require('./commands1');
    
const done = function(cmd) {
  //process.stdout.write('\nprompt > ');
  process.stdout.write(cmd)
}




process.stdin.on('data', function (data) {
  const cmd = data.toString().trim();
  
  if(cmd === 'pwd' || cmd === 'Pwd' || cmd === 'PWD') {
    commands[cmd]()
  }
  if(cmd === 'date' || cmd === 'Date' || cmd === 'DATE') {
    commands[cmd]()
  }
  if(cmd === 'ls' || cmd === 'Ls' || cmd === 'LS') {
    //commands[cmd]
    done(cmd)
  }
  if (cmd.slice(0,5) === 'echo ' || cmd.slice(0,5) === 'Echo ' || cmd.slice(0,5) === 'ECHO ') {
    let echo = cmd.slice(0,4)
    commands[echo](cmd)
  } if (cmd.slice(0,5) === 'curl ' || cmd.slice(0,5) === 'Curl ' || cmd.slice(0,5) === 'CURL ') {
    let curl = cmd.slice(0,4)
    commands[curl](cmd)
  } else {
    process.stdout.write('You typed: ' + cmd);
  }
  
  process.stdout.write('\nprompt > ');
})