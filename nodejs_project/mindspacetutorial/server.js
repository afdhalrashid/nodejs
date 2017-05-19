var link ="https://www.youtube.com/watch?v=NemVc0_pnzM&list=PL55RiY5tL51oGJorjEgl6NVeDbx_fO5jR&index=3";
var http = require('http');
var module1 = require('./moduleone');
var module2 = require('./moduletwo');

function onRequest(request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write(module1.title);
  module1.sumF(1,2);
  response.write(module2.y);
  module2.callMe();

  response.end();

}

http.createServer(onRequest).listen(3000);

//alternatively
// http.createServer(function onRequest(request, response){
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.write(module1.title);
//     module1.sumF(1,2);
//     response.write(module2.y);
//     module2.callMe();
//
//     response.end();
//
// }).listen(3000);
