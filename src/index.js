// import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import path from 'path';

// const rl = readline.createInterface({ input, output });
// rl.question('What is your name?\n', name => {
//   console.log(`Welcome to the File Manager, ${name}!`);
//   rl.close();
// });
import {getCurrentDirectory} from './path.js';
import { userHomedir, changeDirectory } from './os.js';
import repl from 'repl';

const usernameArg = process.argv.slice(2)
const usernameArray = [];
usernameArg.forEach(item => {
  if (item.startsWith('--')) {
    const removePart = item.substring('--', item.lastIndexOf('=') + 1);
    item = item.replace(removePart, '');
  }
  usernameArray.push(item);
});
const username = usernameArray.join(' ');
const exitFileManager = () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
};
console.log(`Welcome to the File Manager, ${username}!`);
console.log(`You are currently in ${changeDirectory(userHomedir)}`);
const rpl = repl.start('>>');
rpl.on('error', () => {
  // err.message = 'Invalid input';
  const err = new Error('Invalid input');
  console.error(err.message);
  // console.error('Invalid input');
});
rpl.on('line', getCurrentDirectory);
rpl.on('exit', exitFileManager);

const up = () => {
  if (process.cwd() === os.homedir()) {
    console.log('UP');
  } else {
      const pathToDivide = path.dirname(process.cwd());
      changeDirectory(pathToDivide);
  }

};
const command = input.toString();
// console.log(command);
switch (command) {
  case 'up': 
    up();
    break;
  
   case `cd ${path}`:
    chdir(path.toString()); 
    changeDirectory(path.toString());
    console.log('CDDDD');
    break;

  case 'down':
    console.log('Down');
    break;  

  // default:
  //   console.log('DEFF');
  //   break;
}

// process.stdin.on('data', getCurrentDirectory);
// process.on('exit', exitFileManager);
// process.on('SIGINT', () => process.exit(0));




