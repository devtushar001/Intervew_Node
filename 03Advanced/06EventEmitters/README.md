🔄 What is an Event Emitter?
In Node.js, many built-in modules (like fs, http, net, etc.) are built around an event-driven system. The EventEmitter class from the events module allows objects to emit named events and register listeners for those events.

📦 How to Use EventEmitter
1. Import the module and create an emitter:

const EventEmitter = require('events');
const myEmitter = new EventEmitter();
2. Listen to an event:

myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});
3. Emit an event:

myEmitter.emit('greet', 'Alice');
Output:

Copy
Edit
Hello, Alice!
💡 Real-Life Analogy
Think of an EventEmitter like a radio station:

The radio station emits events (like songs or messages).

Listeners who are tuned in respond to those events (play music, display messages).

🧰 Some Useful Methods
Method	Description
on(event, listener)	Adds a listener for the event
emit(event, [...args])	Triggers the event
once(event, listener)	Listens only once
removeListener(event, listener)	Removes a specific listener
removeAllListeners([event])	Removes all listeners for an event
✅ Example: Simple Login Event

const EventEmitter = require('events');
const authEmitter = new EventEmitter();

// Register a listener
authEmitter.on('login', (user) => {
  console.log(`${user} has logged in.`);
});

// Emit the event
authEmitter.emit('login', 'john_doe');
🛠️ Use Cases
Logging

Notifications

Custom middleware triggers

Server events (requests, connections, etc.)

Chat apps, real-time systems

