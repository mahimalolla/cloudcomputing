//identify the route
const http=require('http');
const server=http.createServer(function(req,res)
{
    if(req.url=='/')
    {
        res.write("hello world -in if");
        res.end();
    }
    else
    {
        res.write("hello world -in else");
        res.end();
    }
});
server.listen(3000);