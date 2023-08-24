const http = require('http') //First we import http then we create server with arrow function then we pass parameter req,resp then write and end and also listen the port no.

http.createServer((req,resp)=> {

    resp.write('You successfully created server');
    resp.end();
     
}).listen(4300)