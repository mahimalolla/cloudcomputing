var http = require("http");
var url=require("url");
var server=http.createServer(function(req,res)
{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('URL is' +req.url);
    var q = url.parse(req.url,true).query;
    var txt=q.username+"\t"+q.password;
    res.write('\nText Query \t'+txt);
    res.end();
});
server.listen(3000);