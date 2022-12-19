// import * as readline from 'node:readline';
import path from 'path';
import {changeDirectory} from './os.js';
import { stdin as input, stdout as output } from 'node:process';

// const rl = readline.createInterface({ input, output });
// rl.on('close', () => {
//   console.log(`Thank you for using File Manager, ${username}, goodbye!`);
//   process.exit(0);
// });

const up = () => {
  if (process.cwd() === os.homedir()) console.log('UP');
  const pathToDivide = path.dirname(process.cwd());
  changeDirectory(pathToDivide);
};

// const cd = (pathToMove) => {
//   try {
//     chdir(pathToMove);
//   } catch (e) {
//     console.error(e.message);
//   }
// };

switch (input.toString()) {
  case 'up': 
    up();
    break;
  
   case `cd ${path.toString()}`:
    chdir(path.toString()); 
    changeDirectory(path.toString());
    console.log('CDDDD');
    break;

  case 'down':
    console.log('Down');
    break;  

  default:
    console.log('DEFF');
    break;
}

// export {exitCmd};