let fs=require('fs');


let routeHandler= ((req,res)=>{
    let url=req.url;
    let method=req.method;
    if(url==='/'){
        fs.readFile("directory.txt", "utf8", (err,data)=>{
            if(err) throw err;
            res.write(`<body>${data}</body>`)
            res.write('<html><body><form action="/message" method="POST"><input type="text" name="message"></input><button type="submit">submit</button></form></body></html>')
            return res.end();
        })
        
    }
    if(url==='/message' && method==='POST'){
        let body=[];
        req.on('data', (chunk)=>{
            body.push(chunk);
            console.log(chunk);
        })
        return req.on('end', ()=>{
            let response=Buffer.concat(body).toString();
            console.log(response);
            let data=response.split('=')[1];
            fs.writeFileSync("directory.txt",data)
            res.statusCode=302;
            res.setHeader('Location','/');
            return res.end();
        })
        
        
    }
    
})

// module.exports =routeHandler;

// module.exports = {
//     handler : routeHandler,
//     text:'sometexts'
// }

// module.exports.handler=routeHandler;
// module.exports.text='sometexts';

exports.handler=routeHandler;
exports.text='sometexts';
