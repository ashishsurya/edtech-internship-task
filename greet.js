const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Please enter your name: ', function (name) {
  console.log(`Welcome ${name}.`)
  rl.close();
});
