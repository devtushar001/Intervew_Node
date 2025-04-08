// Create an emitter 
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Listen to an emitter
myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Emit an event
myEmitter.emit('greet', 'Alice');  //Hello, Alice!