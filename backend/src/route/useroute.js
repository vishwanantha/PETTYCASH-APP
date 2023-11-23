import express from 'express'
import transcontroll from '../conroller/trans.js'
const router =express.Router()

router.post('/',transcontroll.trans).get('/',transcontroll.gettran).delete('/',transcontroll.delettran)
.get('/label',transcontroll.total)
//
//

   

export default router




