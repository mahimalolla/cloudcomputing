var http=require('http');
const server=http.createServer(function (req,res) //creates server
{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(req.url);
    res.end();
}
);
server.listen(8080);//port where server listens