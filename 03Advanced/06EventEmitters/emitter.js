const eventEmitter = require('events');

const myEmitter = new eventEmitter();

myEmitter.on("greet", (name) => {
 console.log(`Hello! ${name}`);
})

myEmitter.emit("greet", "Tushar");