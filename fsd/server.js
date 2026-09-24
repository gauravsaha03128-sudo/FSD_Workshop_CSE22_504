const http = require('http');
const server = http.createServer((res,res)=>{
    res.writehead(200,{'content-type':'text/plain'});
    res.end('This is my page');
});
server.listen(4000,()=>console.log('Server running at http://localhost:4000'));