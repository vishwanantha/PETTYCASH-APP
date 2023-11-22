import express from 'express'
import userModel from '../model/user.js'
const route =express.Router()

route.post('/post',(req,res)=>{
    userModel.create({
    
    name:req.body.name,
    type:req.body.type,
    amount:req.body.amount,
    date: req.body.date 

    }).then(result=>{
        return res.json(result)

    }).catch(err=>console.log(err))

})
route.get('/tra',(req,res)=>{
    userModel.find({})
    .then(r=>{
        return res.json(r)
    }).catch(err=>res.json(err))
})
route.delete('/tra/trans',(req,res)=>{
    userModel.deleteOne({})
    .then(re=>{
        return res.json(re)
    }).catch(err=>res.json(err))
})

   

export default route




