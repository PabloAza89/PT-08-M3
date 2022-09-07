const commands = require('./commands');
    
process.stdout.write('\nprompt > ');
process.stdin.on('data', function (data) {
  const cmd = data.toString().trim();
  process.stdout.write('You typed: ' + cmd);
  if(cmd === 'pwd' || cmd === 'Pwd' || cmd === 'PWD') {
    commands.pwd()
  }
  if(cmd === 'date' || cmd === 'Date' || cmd === 'DATE') {
    commands.date()
  }
  if(cmd === 'ls' || cmd === 'Ls' || cmd === 'LS') {
    commands.ls()
  }
  if (cmd.slice(0,4) === 'echo')
  
  if(cmd === 'echo' || cmd === 'Echo' || cmd === 'ECHO') {
    commands.echo(cmd)
  }
  process.stdout.write('\nprompt > ');
})

