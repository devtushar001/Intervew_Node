Q.5 How would you handle uncaught exceptions in Node.js
Ans. 

🚨 What is an Uncaught Exception?
An uncaught exception is a runtime error that wasn't handled by a try...catch block or a .catch() on a Promise. When this happens, Node throws an 'uncaughtException' event, which can bring down your app if not handled.

✅ How to Handle Uncaught Exceptions
🔹 1. Use process.on('uncaughtException')

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  // Optionally log to file or alert service here
  // It's usually best to shut down the app safely
  process.exit(1);
});
💡 Best practice: Log the error, maybe clean up resources, and then exit the process.

🔹 2. Use process.on('unhandledRejection')
For unhandled Promise rejections:


process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Consider exiting the process here too
  process.exit(1);
});
⚠️ Important Notes:
You should not rely on these handlers to keep your app running long-term.

Instead, use them to log errors, and maybe trigger alerts, then gracefully shut down the server.

Use a process manager like PM2, Docker, or Kubernetes to automatically restart your app after it crashes.

🛡 Best Practices
Practice	Description
✅ Try-Catch	Use try...catch in synchronous code
✅ .catch()	Always chain .catch() to Promises
✅ Async/Await	Wrap await code in try...catch
✅ Logger	Use a logger like winston or pino
✅ Graceful Shutdown	Close DBs and servers before process.exit()
🔧 Example of Graceful Shutdown

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  // Close database, server, etc.
  server.close(() => {
    process.exit(1);
  });
});