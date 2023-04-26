let express=require('express');
let path=require('path');

let router=express.Router();

let rootdir=require('../util/path');

router.get('/contactus',(req, res,nexts)=>{
    res.sendFile(path.join(rootdir,'views','contactus.html'))
   
});

router.post('/contactus',(req,res,next) => {
  res.sendFile(path.join(rootdir,'views','success.html'))
})

module.exports = router;