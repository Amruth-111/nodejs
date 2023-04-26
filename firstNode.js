// let array= ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']

// let abc=(array.map((value)=>{
//     if(value===" ") value="empty string"
//     return value
// }))
// console.log(abc)

// let obj={
//     name: 'foo',
//     classs:"bca",
//     getdata(){
//         return `name is ${this.name}`
//     }
// }

// const [fruit1, fruit2]=abc;
// console.log(fruit1);

// const {name:name11,classs:class22} =obj
// console.log(name11,class22);



// async function c(){
//     console.log('a');

//     console.log('b');
//     let abc=await new Promise((resolve,reject)=>{
//         setTimeout(() => resolve('c'), 3000)
//     })
//     console.log(abc)
//     let bcd=await new Promise((res,rej)=>{
//         setTimeout(() => res('d'), 0)
//     })
//     console.log(bcd)
//     console.log('e');

// }
// c();



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
