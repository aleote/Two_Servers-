var http = require ("http");

var PORT1 = 7000;
var PORT2 = 7500;

function saySomethingGood(request, response) {
      response.end("You look beautiful today" + request.url) 
}

var server1 = http.createServer(saySomethingGood);

server1.listen(PORT1, function() {

 
  console.log("Server listening on: http://localhost:" + PORT1);
});


function saySomethingBad (request, resonse) {
	response.end("You look awful today" + request.url)
}

var server2 = http.createServer(saySomethingBad);

server2.listen(PORT2, function() {

  
  console.log("Server listening on: http://localhost:" + PORT2);
});




