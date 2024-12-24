// const { createServer } = require('node:http'); // importing package

// //Need these two to create url
// const hostname = '127.0.0.1'; // you can change host name if u want 
// const port = 3000; // you can change port name if u want


// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('A Monk in Cloud'); //write a response to the client
  res.end(); //end the response
}).listen(80); //the server object listens on port 80
