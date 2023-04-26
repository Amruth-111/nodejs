let express=require('express');
let path=require('path');

let router=express.Router();

let rootdir=require('../util/path');

router.get('/add-products',(req, res,nexts)=>{
    res.sendFile(path.join(rootdir,'views','add-product.html'))
   
});

router.post('/add-products',(req,res,next) => {
    console.log(req.body);
    res.redirect('/')
})

module.exports = router;