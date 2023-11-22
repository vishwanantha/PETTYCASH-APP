import express from 'express'
import router from './src/route/routes.js'
import route from './src/route/useroute.js'
import cors from 'cors'
const app=express()
app.use(express.json())
app.use(cors())
app.use('/api',router)
app.use('/uses',route)

const PORT=6000
app.listen(PORT,()=>{console.log(`server ${PORT}`)})