let express=require('express');

let router=express.Router();

router.get('/add-products',(req, res,nexts)=>{
    res.send('<form action="/admin/add-products" method="POST"><input type="text" name="title" placeholder="name"><input type="number" name="size" placeholder="size"><button type="submit">add</button></input></form>');
});

router.post('/add-products',(req,res,next) => {
    console.log(req.body);
    res.redirect('/')
})

module.exports = router;