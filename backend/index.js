import express from 'express'
import route from './src/route/index.js'

import cors from 'cors'
const app=express()
app.use(express.json())
app.use(cors())
app.use('/api',route)

const PORT=6000
app.listen(PORT,()=>{console.log(`server ${PORT}`)})