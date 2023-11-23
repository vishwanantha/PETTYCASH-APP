import express from 'express'
import router from './routes.js'
import useroute from './useroute.js'
const route=express()


route.use('/create',router)
route.use('/transction',useroute)

export default route