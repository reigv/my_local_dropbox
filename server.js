// Port number = the "door" on your PC that the server listens on.
// FIX: added "const". Without it, PORT becomes an accidental global variable (bad habit).
const PORT = 3300;

// Load Node's built-in web server tool. No install needed.
const http = require('http');

// Create the server.
// This function runs EVERY time a browser visits.
//   req = request  -> what the browser asks for (URL, method, headers)
//   res = response -> what you send back
const server = http.createServer((req, res) => {
    // Send "Hello World" back and finish the answer.
    res.end('Hello World');
});

// Start listening for visitors.
//   PORT      -> which door (3300)
//   '0.0.0.0' -> accept visitors from any device (your phone too), not only this PC
//   () => {}  -> runs once, when the server is ready
server.listen(PORT, '0.0.0.0', () => {
    // FIX: backticks ` ` instead of quotes ' ' so ${PORT} is replaced by the real number.
    //      With ' ', it printed the word "PORT" literally. Also fixed typo "Runing".
    console.log(`Running on http://localhost:${PORT}`);
});
