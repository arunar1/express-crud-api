const express=require('express')

const server=express()

server.listen(4001,()=>{
    console.log("server is running successfully on port number 400");
});