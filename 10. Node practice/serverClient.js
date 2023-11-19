const http=require('http');
const fs=require("fs");
const { error } = require('console');

const server = http.createServer((req,res)=>{
    if(req.url==='/api/data'){
        const responseData = {message: 'Hello Client'};
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(responseData))
    }else{
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end('Not Found');
    }
});

const port=3000;
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});












