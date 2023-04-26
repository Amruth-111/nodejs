
let http = require('http');
let express = require('express');
let bodyParser = require('body-parser');
let path=require('path');

let rootdir=require('./util/path');

const app=express();


const adminroutes=require("./routes/admin");
const shoproutes=require("./routes/shop");
const contactus=require("./routes/contactus");


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin',adminroutes);
app.use(shoproutes);
app.use(contactus);

app.use((req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','404.html'))
})
app.listen(5000);
