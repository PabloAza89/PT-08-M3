const commands = require('./commands1');
process.stdout.write('\nWelcome to Prompt!\nCommands are next: \n(pwd) Print current path\n(date) Print current date\n(ls) Print files & folders from current path\n(echo + string) Return string\n(curl + URL) Print body of URL (https://www...)\n(sort + file.txt) Return an txt file alphabetically sorted by line');
process.stdout.write('\nprompt > ');
process.stdin.on('data', function (data) {
  
  const cmd = data.toString().toLowerCase().trim().split(' ')[0];
  const args = data.toString().trim().split(' ').slice(1).join(' ')
  
  if(cmd === 'pwd') {
    commands[cmd]()
  }
  else if(cmd === 'date') {
    commands[cmd]()
  }
  else if(cmd === 'ls') {
    commands[cmd]()
  }
  else if (cmd === 'echo') {
    commands[cmd](args)
  }  
  else if (cmd === 'curl') {
    commands[cmd](args)
  } 
  else if (cmd === 'sort') {
    commands[cmd](args)
  } else {
      process.stdout.write('Command not found...');
  }
  process.stdout.write('\nprompt > ');
})
