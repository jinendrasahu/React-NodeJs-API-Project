var request=require('request');
var express=require('express');
var router=express.Router();
router.get('/:id',(req,res,next)=>{
   request('https://terriblytinytales.com/testapi?rollnumber='+req.params.id+'',(err,resp,body)=>{
     if(!err && resp.statusCode==200){
         return res.send(body);
     }
   });
});
module.exports=router;