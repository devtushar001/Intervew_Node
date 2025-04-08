process.on('message', (msg) => {
  console.log('Message from parent:', msg.msg);
  process.send({ msg: 'I am doing great! How about you?' });
});
