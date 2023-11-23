import express from 'express'
import createcontroll from '../conroller/controller.js'
import getcontroll from '../conroller/controller.js'
const router=express.Router()


router.post('/',createcontroll.create)
.get('/',getcontroll.get)
export default router

