let http=require('http');
let fs=require('fs');
let server=http.createServer((req,res)=>{
    let url=req.url;
    let method=req.method;
    if(url==='/'){
        fs.readFile("message.txt",{encoding: 'utf8'},(err, data)=>{
            if(err){
                    console.log(err);
            } 
            res.write(`<body>${data}</body>`)
            res.write('<html><body><form action="/message" method="POST"><input type="text" name="message"></input><button type="submit">submit</button></form></body></html>')
            return res.end();
        })
        
    }
    
    else if(url==='/message' && method==='POST'){
        const body = [];
        req.on('data', (chunk)=>{
            body.push(chunk);
            console.log(chunk);
        })
        return req.on('end', ()=>{
            const response=Buffer.concat(body).toString()
            console.log(response);
            const message=response.split("=")[1]
            
            fs.writeFile('message.txt',message,err=>{
            res.statusCode=302;
            res.setHeader('location','/')
            return res.end();
            })
            
        })
        
    }

   
    

})
server.listen(4000);