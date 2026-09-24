const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('maara jayega\n');
    res.end('this is the end of the response');
});
server.listen(4000,()=>{
    console.log('Server running at http://localhost:4000/');
});