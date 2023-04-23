
let http = require('http');
let routes=require('./routes');

console.log(routes.text)

let server=http.createServer(routes.handler);

server.listen(5000);