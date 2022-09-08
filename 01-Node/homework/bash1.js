const commands = require('./commands1');
process.stdout.write('\n\x1b[36mWelcome to Prompt!\nCommands are next: \x1b[0m\n\x1b[35m(pwd)\x1b[0m Print current path\n\x1b[35m(date)\x1b[0m Print current date\n\x1b[35m(ls)\x1b[0m Print files & folders from current path\n\x1b[35m(echo + string)\x1b[0m Return string\n\x1b[35m(curl + URL)\x1b[0m Print body of URL (https://www...)\n\x1b[35m(sort + file.txt)\x1b[0m Return an txt file alphabetically sorted by line (Regardless about upper and lower case!)\n\x1b[35m(wc + file.txt)\x1b[0m Return number of lines, words & characters from file\n\x1b[35m(uniq)\x1b[0m Deteles duplicated lines\n\x1b[35m(sortUniq + file.txt)\x1b[0m Return number of lines, words & characters from file without duplicated items');
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
  }
  else if (cmd === 'wc') {
    commands[cmd](args)
  }
  else if (cmd === 'uniq') {
    commands[cmd](args)
  }
  else if (cmd === 'sortuniq') {
    commands[cmd](args)
  } else {
      process.stdout.write('Command not found...');
  }
  process.stdout.write('\nprompt > ');
})
