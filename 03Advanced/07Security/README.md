Q.7 What are some common security concerns in node.js and how do you handle them?

🔐 1. Injection Attacks (e.g., SQL Injection, NoSQL Injection)
Risk: Attacker injects malicious queries via user input.

How to Handle:

Use ORM/ODM like Sequelize, Prisma, or Mongoose to safely handle queries.

Validate and sanitize input using libraries like validator or express-validator.

Never trust user input directly in queries.

🛡️ 2. Cross-Site Scripting (XSS)
Risk: Malicious scripts injected into web pages.

How to Handle:

Sanitize user inputs and outputs.

Use a templating engine like Pug, EJS, or Handlebars that auto-escapes output.

Libraries: xss-clean, DOMPurify (on frontend).

🔑 3. Sensitive Data Exposure
Risk: Leaking passwords, tokens, secrets in logs or front-end.

How to Handle:

Use environment variables (with dotenv) for secrets.

Never commit .env files to GitHub.

Store passwords securely using hashing (bcrypt).

🕵️‍♂️ 4. Insecure Dependencies
Risk: Using outdated or vulnerable packages.

How to Handle:

Run npm audit and npm audit fix.

Use tools like snyk or npm-check-updates.

Keep dependencies updated and minimal.

🚪 5. Cross-Site Request Forgery (CSRF)
Risk: Unwanted actions triggered from another site.

How to Handle:

Use CSRF protection middleware like csurf.

Validate origin and referer headers in sensitive requests.

🔐 6. Authentication & Authorization Issues
Risk: Unauthorized access to resources.

How to Handle:

Use proper authentication mechanisms (JWT, OAuth).

Protect routes using middleware (passport, express-jwt).

Enforce role-based access control.

🌍 7. Rate Limiting & Bruteforce Attacks
Risk: Attacker floods server or brute-forces credentials.

How to Handle:

Use express-rate-limit to limit requests.

Use helmet to set secure HTTP headers.

⚙️ 8. Uncaught Exceptions & Crashes
Risk: App crashes and becomes unavailable.

How to Handle:

Use error-handling middleware in Express.

Catch unhandled promise rejections and exceptions:

process.on('uncaughtException', ...)
process.on('unhandledRejection', ...)
Consider using a process manager like PM2 to auto-restart the app.