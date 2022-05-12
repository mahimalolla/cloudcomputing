//Displaying HTML content
const requestListener=function(req,res){
    res.setHeader("Content-Type","text/html");
    res.writeHead(200);
    res.end("<html><body><h1>This is HTML</h1></body></html>");
};
var http=require('http');
const server=http.createServer(requestListener);
server.listen(3000);
