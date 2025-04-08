const { fork } = require('child_process');

const child = fork('./forkChild.js');

child.send({ msg: 'Hey child, how are you?' });

child.on('message', (msg) => {
  console.log('Message from child:', msg.msg);
});
