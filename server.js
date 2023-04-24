
let http = require('http');
let express = require('express');
let bodyParser = require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-products',(req, res,nexts)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title" placeholder="name"><input type="number" name="size" placeholder="size"><button type="submit">add</button></input></form>');
});

app.post('/product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/')
})

app.use('/',(req,res,next)=>{
    
    res.send('<h1>Hello Amruth</h1>')
})  




app.listen(5000);
