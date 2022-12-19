import os from 'os';

const currentDirectory = process.cwd();
const userHomedir = os.homedir();
const changeDirectory = (dirPath) => {
  try {
    process.chdir(dirPath);
    return dirPath;
  } catch (e) {
    console.error(`Could not change directory`);
  }
};

export {userHomedir, changeDirectory, currentDirectory};