const http = require("http");
const fs = require('fs');
const mime = require('mime');

http.createServer((req,res)=>{
    fs.readFile(__dirname + req.url,"utf-8",(err,data)=>{
        if(err){
            res.statusCode = 404;
            res.setHeader("Content-Type","text/plain");
            res.end("Not Found!");
        }
        else{
            res.statusCode = 200;
            res.setHeader("Content-Type", mime.getType(__dirname + req.url));
            res.end(data);
        }
    });
}).listen(3000,"127.0.0.1",()=>{
    console.log("Successfully");
});