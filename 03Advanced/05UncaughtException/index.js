process.on('uncaughtException', (err) => {
    console.error(`Uncaught Excetpion: ${err.name} - ${err.message}`);
    // Optionally log to file or alert service here 
    // It's usally best to shut down the app safely
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Consider exiting the process here too
    process.exit(1);
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    // Close database, server, etc.
    server.close(() => {
        process.exit(1);
    });
});
