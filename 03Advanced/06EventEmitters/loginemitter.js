const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("Login", (user) => {
    console.log(`${user} has logged in.`);
});

myEmitter.emit("Login", "John Doe");