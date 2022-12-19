import fs from 'fs';
import path from 'path';

const getCurrentDirectory = () => {
  console.log(`You are currently in ${process.cwd()}`);
  // return path.basename(process.cwd());
};

const isDirectoryExist = (filePath) => {
  return fs.existsSync(filePath);
};


export {getCurrentDirectory, isDirectoryExist};