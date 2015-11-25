
var http = require('http');

export function start() {
    var server = http.createServer(function(request:any, response:any){
        response.statusCode = 200;
        response.setHeader('Content-type', 'text/plain');
        response.write('Hello, TypeScript!');
        response.end();
    });
    server.listen(8080);
}