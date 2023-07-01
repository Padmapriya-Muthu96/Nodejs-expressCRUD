const express =require('express')
const router=express.Router()


const users=[
    {
        name:"padma",
        email:"padma@gmail.com",
        batch:"B46WDT",
        role:"student"
    },
    {
        name:"siva",
        email:"siva@gmail.com",
        batch:"B47WDT",
        role:"student"
    },
    {
        name:"muthu",
        email:"muthu@gmail.com",
        batch:"B48WDT",
        role:"student"
    },
    {
        name:"ratchagi",
        email:"ratchagi@gmail.com",
        batch:"B49WDT",
        role:"student"
    },
    {
        name:"krishana",
        email:"krish@gmail.com",
        batch:"B50WDT",
        role:"student"
    },

]
router.get('/',(req,res)=>{
    res
    .status(200)
    .send({
        message:"Data fetched successfully",
    users})
})

router.get('/:id',(req,res)=>{
    if(Number(req.params.id)<users.length){
        res
        .status(200)
        .send({
            message:"Id fetched successfully",
            data:users[req.params.id]
        })
    }
    else{
        res
        .status(400)
        .send({message:"users not found"})

    }
})


router.post('/',(req,res)=>{
    users.push(req.body)
    res
    .status(200)
    .send({
        message:"User Saved Successfuly"
    })
})

router.put('/:id',(req,res)=>{
    if(Number(req.params.id)<users.length){
        users.splice(req.params.id,1,req.body)
        res
        .status(200)
        .send({
            message:"Id edited successfully",
            data:users[req.params.id]
        })
    }
    else{
        res
        .status(400)
        .send({message:"users not found"})

    }
})
router.delete('/:id',(req,res)=>{
    if(Number(req.params.id)<users.length){
        users.splice(req.params.id,1)
        res
        .status(200)
        .send({
            message:"user deleted successfully",
            data:users[req.params.id]
        })
    }
    else{
        res
        .status(400)
        .send({message:"users not found"})

    }
})

module.exports=router