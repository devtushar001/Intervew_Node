// parent.js
const { fork } = require('child_process');
const child = fork('child.js');

child.send({ msg: 'Hello child' });
child.on('message', (msg) => {
  console.log('Message from child:', msg);
});

// child.js
process.on('message', (msg) => {
  console.log('Message from parent:', msg);
  process.send({ msg: 'Hello parent' });
});
