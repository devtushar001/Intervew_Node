Q.3 What is the purpose of buffer in Node.js?

🧊 What is a Buffer in Node.js?
A Buffer is a built-in class in Node.js used to handle binary data directly in memory.

It’s especially useful when dealing with:

File systems (fs module)

Network protocols (net, http)

Streams

Cryptographic functions

🧠 Why Do Buffers Exist?
JavaScript (in browsers) doesn’t handle raw binary data very well — it mostly works with strings and objects. But Node.js is built for server-side tasks and often deals with binary streams, like:

Reading/writing files

Sending/receiving data over TCP sockets

Image or video processing

So Node introduced Buffers to fill that gap.

🔧 How to Create a Buffer
js
Copy
Edit
// Create a buffer with a string
const buf = Buffer.from('Hello');
console.log(buf); // <Buffer 48 65 6c 6c 6f>
js
Copy
Edit
// Create a buffer of 10 bytes
const buf2 = Buffer.alloc(10);
📦 Buffer vs String
A string is Unicode-based.

A buffer is raw binary data.

When transferring files or working with sockets, using Buffer ensures data isn't corrupted or incorrectly encoded.

✅ Common Use Cases
Use Case	Example
File handling	fs.readFile() returns a buffer
TCP Sockets	Raw binary transmission
Stream processing	Buffers used internally
Encoding/Decoding	Convert between UTF-8, base64, hex
🔁 Example: Buffer to String
js
Copy
Edit
const buf = Buffer.from('Hello World');
console.log(buf.toString()); // "Hello World"
TL;DR
Buffers handle raw binary data in Node.js.

Useful for file I/O, streams, and networking.

They’re crucial for performance and precision when dealing with binary content.