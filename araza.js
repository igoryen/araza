


var http = require("http"); // 1
var url  = require("url"); // 9

http.createServer(function (request, response) { // 2
   //request.on("end", function () { // 3
      var _get = url.parse(request.url, true).query; // 10
      response.writeHead(200, { // 4
         'Content-Type': 'text/plain' // 7
      });
      response.end('Here is your data: ' + _get['data']); // 5
   //});
}).listen(8080); // 6
console.log('Server listening. (http://localhost:8080/?data=put_some_text_here)'); // 8

/*
 =================================================================
 1) Include http module.
 2) Create the server. 
    A function is passed as parameter. This function is called on every request made.
    $request holds all request parameters.
    $response allows you to do anything with response sent to the client.
 3) Attach listener on end event.
    This event is called when client sent all data and is waiting for response.
 4) response.writeHead() to write headers to the response.
    200 is HTTP status code (this one means success)
 5) response.end() - to (1) send data and (2) to end response.
    _get['data'] - will have data that you set in URL. e.g. /?data=hello
 6) http.createServer().listen() - to listen on the 8080 port.
 7) Second parameter, holds header fields in object
    Content-Type is 'text/plain' because we are sending plain text
 8) console.log() - to get this text to show up in the terminal
 9) and url module, which is very helpful in parsing request parameters. 
 10) url.parse() - to parse the request for arguments and store them in _get variable.
     This function parses the url from request and returns (converts to) object representation.
     url.parse().query - the return object has .query property

*/
