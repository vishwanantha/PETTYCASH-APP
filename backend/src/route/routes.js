import express from 'express'
import Categories from '../model/login.js'

const router=express.Router()

router.get('/reg',async(req,res)=>{


   return res.json({Message:"user"})
})
router.post('/create',(req,res)=>{
    Categories.create({
        type: "Investment",
        color: "#FCBE44"

    }).then(result=>{
        return res.json(result)

    }).catch(err=>console.log(err))

})
router.get('/get',(req,res)=>{
    Categories.find({})
  
    .then(result=>{
        return res.json(result)
    }).catch(err=>res.json(err))
})
export default router

