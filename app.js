const express=require('express')

const server=express()

server.use(express.json());

server.get('/',(req,res)=>{
    res.send("Hello welcome to the page");
});

server.listen(4001,()=>{
    console.log("server is running successfully on port number 400");
});