Q.8 What is the difference between spawn(), exec() and fork() in child process?

Ans: 🔹 spawn()
    Use case: When you need to stream large data or run a command with real-time output.
    Returns: A ChildProcess object with stdout and stderr as streams.
    Buffer: Does not buffer the output — data comes as streams (suitable for large outputs).
    ✅ Best for long-running processes or commands with lots of output.


    🔹 exec()
    Use case: When you want to run a command and get the output once it's done.

    Returns: Buffers the output and gives you a callback with stdout and stderr.

    Buffer: Yes — output is buffered in memory (limit: 1MB by default).

    ✅ Best for short commands or when you just need the final result.

    🔹 fork()
    Use case: Specifically for spawning new Node.js processes and enabling IPC (inter-process communication).

    Returns: A special case of spawn() with a communication channel.

    Used for: Running another Node.js script and communicating with it via send() and on('message').

    ✅ Best for running background tasks, worker threads, or microservices within Node.js.

    Method	Streams	Buffer Output	IPC Support	Use Case
    spawn()	✅	     ❌	  ❌	    Large output, real-time data
    exec()	❌	     ✅	  ❌	    Simple commands, buffered
    fork()	✅	     ❌	  ✅	    Node-to-Node communication
