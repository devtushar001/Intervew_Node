Q.4 How does Node.js manage memory?

Ans: 
🧠 Node.js Memory Management Overview
Node.js runs on Google’s V8 engine, the same engine that powers Chrome. So memory management in Node is largely handled by V8, which uses:

Automatic garbage collection (GC) based on the concept of generational memory management.

📦 How Memory is Structured in Node.js
V8 organizes memory into two main segments:

1. Heap
Stores objects, strings, closures — i.e., anything allocated dynamically.

Divided into:

New Space (Young Generation): Small, short-lived objects.

Old Space (Old Generation): Large or long-lived objects.

2. Stack
Stores primitive values and references used in function execution.

Much smaller, fast access, and cleared automatically when function scope ends.

🧹 Garbage Collection (GC)
V8’s Garbage Collector automatically frees memory that is no longer reachable.

V8 uses two types of GC:
GC Type	Description
Scavenge (Minor GC)	Cleans up the Young Generation (New Space) quickly
Mark-Sweep & Mark-Compact (Major GC)	Cleans the Old Generation (Old Space); more expensive and slower
⚙️ How Node.js Helps with Memory Management
Automatic: You don’t need to manually allocate/free memory.

Efficient for most cases, but...

Not magic — memory leaks can still happen (like storing large data in global variables or forgetting to clean up event listeners).

📈 Default Memory Limits
By default, Node.js limits heap memory:

Platform	Limit
64-bit	~1.5 GB
32-bit	~0.7 GB
You can increase this limit using:

bash
Copy
Edit
node --max-old-space-size=4096 your-app.js
(Allocates 4 GB to heap)

🔍 Monitoring & Debugging Memory
You can track and debug memory usage with:

process.memoryUsage() — shows memory usage stats

Chrome DevTools via --inspect

Tools: heapdump, memwatch-next, clinic.js, v8-profiler

js
Copy
Edit
console.log(process.memoryUsage());
🔥 Common Memory Leak Sources
Cause	Fix
Global variables	Avoid excessive globals
Forgotten timers	clearInterval / clearTimeout
Unremoved event listeners	Use removeListener or once()
Large in-memory caches	Use proper LRU or TTL strategies
TL;DR
Node.js uses V8, which provides automatic garbage collection.

Memory is split into heap (objects) and stack (execution context).

Default heap limit is ~1.5 GB; increase if needed.

Watch out for leaks in long-running apps — they won’t crash, but performance will degrade.

