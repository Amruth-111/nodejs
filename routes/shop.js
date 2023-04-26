let express=require('express');
let path=require('path');
let rootdir=require('../util/path');

let router=express.Router();
router.get('/',(req,res,next)=>{
    
    res.sendFile(path.join(rootdir,'views','shop.html'))
})  


module.exports = router