/**
 * Created by TIR-afdhal on 16/5/2017.
 */
const http = require('http');
const filesystem = require('fs');//using file system

filesystem.readFile('index.html', (err, html)=>{
  if(err){
    throw err;
  }else{
    const hostname = '127.0.0.1';
    const port = 3000;

    const server = http.createServer((req, res) => {
        console.log(req);
        res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html'); //set to html to read html file
    res.write(html);
    res.end();
    // res.end('Hello World\n');
    });

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
  }
});
