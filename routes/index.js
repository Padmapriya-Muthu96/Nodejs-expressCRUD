const express=require('express')

const router=express.Router()

router.get('/',(req,res)=>{
    res.send('<h1>Hi, welcome to my express page</h1>')
})
router.post('/users',(req,res)=>{
    console.log(req.body)
    
    res.send({message:"Data saved successfully"})
})

module.exports=router


