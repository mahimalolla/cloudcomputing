//multiroute_node.js
const http = require( 'http');
const fs = require("fs");
const server = http.createServer(function(req,res){
if(req.url =='/home')
{ fs.readFile ("home_multiroute_node.htm'", function(err, data) {
if(lerr)
{
res. writeHead(200, {'Content-Type': "text/htm!"});
res.write(data);
res.end();
}})}
else if(req.url=="/contact")
{
fs.readFile("contact_multiroute_node.htm!", function(err, data) {
if(lerr)
{
res.writeHead(200, {'Content-Type': "text/html"});
res.write(data);
res.end();
}})}
});
server.listen(3000);