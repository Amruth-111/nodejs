
let http = require('http');
let express = require('express');

const app=express();

app.use((req,res,next)=>{
    console.log("inside middleware1");
    next();
})

app.use((req,res,next)=>{
    console.log("inside middleware2");
    res.send('<h1>Hello world!</h1>');
})

let server=http.createServer(app);


server.listen(5000);
