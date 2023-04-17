#!/usr/bin/env node

const { exeSync } = require('child_process');

const runCommand = command => {
  try {
    exeSync(`${command}`, { stdio: 'inherit' });
  } catch (e) {
    console.log(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
};
const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --dept 1 http://github.com/hhimanshu/react-starter ${repoName}`;
const installDepCommand = `cd ${repoName} && ${repoName}`;

console.log(`cloning the repository with ${repoName}`);
const checkout = runCommand(gitCheckoutCommand);

if (!checkout) process.exit(code);

console.log(`Installing dependencies for ${repoName}`);
const installDep = runCommand(installDepCommand);

if (!installDep) process.exit(code);

console.log('Congratulations you are ready. Follow the command to start');
