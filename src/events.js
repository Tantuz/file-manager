import { EventEmitter } from 'node:events';

class EnterConsoleEmitter extends EventEmitter {}

const myEmitter = new EnterConsoleEmitter();
myEmitter.on('enter', () => console.log(`You are in...`));
myEmitter.emit('enter');